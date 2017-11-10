window.addEventListener('DOMContentLoaded', function () {
    {
        var objects = document.querySelectorAll('#objectsZone > .objects');
        var dropZone = document.querySelector('#dropZone');

        function dragStart(event) {
            event.target.getAttribute('id');
            event.dataTransfer.setData('text',
                event.target.getAttribute('id'));
        }

        function dragEnd() {
            //            if (droppedIN === false) {
            event.target.getAttribute('id');
            /* }
             droppedIN = false;*/
        }

        function dragEnter(event) {
            event.target.getAttribute('id');
            this.classList.add('over');
        }

        function dragLeave(event) {
            event.target.getAttribute('id');
            this.classList.remove('over');
            this.removeAttribute('class');
        }
        //        Відміна вбудованої функції DnD
        function dragOver(event) {
            event.preventDefault();
        }

        function dragDrop(event) {
            event.preventDefault();
            var elementID = event.dataTransfer.getData('text');
            var element = document.getElementById(elementID);
            event.target.appendChild(element);
            element.removeAttribute('draggable');
            element.classList.add('dragged');
            element.style.cursor = 'default';
//            Перевірка, чи відбулась подія
            droppedIN = true;
            /*            dropStatus.innerHTML = 'Element ' + elementID + ' dropped into the ' + */
            event.target.getAttribute('id');
        }



        if (objects) {
            [].forEach.call(objects, function (el) {
                el.setAttribute('draggable', 'true');
                el.addEventListener('dragstart', dragStart, false);
                el.addEventListener('dragend', dragEnd, false);
            });
        }

        if (dropZone) {
            dropZone.addEventListener('dragenter', dragEnter, false);
            dropZone.addEventListener('dragleave', dragLeave, false);
            dropZone.addEventListener('dragover', dragOver, false);
            dropZone.addEventListener('drop', dragDrop, false);
        }
    }

});
