/*!
 * Remove an event listener
 * 
 * @param  {String}   event             The event type
 * @param  {Node}     elementRemove     The element to remove the event to (optional, defaults to window)
 * @param  {Function} callback          The callback that ran on the event
 * @param  {Boolean}  bool              If true, forces bubbling on non-bubbling events
 */

function removeListener(event, elementRemove, callback, bool) {

    if (typeof (elementRemove) === 'function') {

        bool = callback;
        callback = elementRemove;
        elementRemove = window;

    }

    bool = bool ? true : false;

    elementRemove = typeof elementRemove === 'string' ? document.querySelector(elementRemove) : elementRemove;

    if (!elementRemove) return;

    elementRemove.removeEventListener(event, callback, bool);

}