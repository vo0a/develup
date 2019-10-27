function els(selector, context) {
    if (typeof selector !== 'string' || selector.trim().length === 0) { return null; }
    context = !context ? document : context.nodeType === 1 ? context : el(String(context));
    return context.querySelectorAll(selector);
}
  
function el(selector, context) {
    if (typeof selector !== 'string' || selector.trim().length === 0) { return null; }
    context = !context ? document : context.nodeType === 1 ? context : el(String(context));
    return context.querySelector(selector);
}

var store_items = null;

function init(){
    accessingDOMElements();
    bindEvents();
}

function accessingDOMElements() {
    store = el('.store');
    store_items = els('.store_item', store);
}

function bindEvents(){
    for( var i = 0, l=store_items.length; i<l; i++){
        var store_item = store_items[i];
        var link = el('a', store_item);
        var close_panel_btn = el('.button.is-close-panel', store_item);

        link.addEventListener('click', openDetailPanel.bind(link, i));
        close_panel_btn.addEventListener('click', closeDetailPanel);
    }
}

function openDetailPanel(index, e) {
    e.preventDetault();
    var detail = el('.store_item-detail', store_items[index]);
    detail.hidden = false;
    window.setTimeout(function(){
        detail.classList.add('is-active');
    }, 10);
}

function closeDetailPanel(){
    var parent = this.parentNode; // detail
    parent.classList.remove('is-active');
    window.setTimeout(function(){
        parent.hidden = true;
    }, 600);
}

init();