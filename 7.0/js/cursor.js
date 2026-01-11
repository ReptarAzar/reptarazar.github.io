const cursorWrapper = document.getElementById('cursor-wrapper');
        const cursor = document.getElementById('cursor');
        const body = document.body;

        body.addEventListener('mousemove', (e) => {
            cursorWrapper.style.left = e.clientX + 'px';
            cursorWrapper.style.top = e.clientY + 'px';
        });

        body.addEventListener('mouseenter', () => {
            cursorWrapper.style.display = 'block';
        });

        body.addEventListener('mouseleave', () => {
            cursorWrapper.style.display = 'none';
        });

        body.addEventListener('mousedown', () => {
            cursor.style.width = '30px';
            cursor.style.height = '30px';
        });

        body.addEventListener('mouseup', () => {
            cursor.style.width = '10px';
            cursor.style.height = '10px';
        });

        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                cursor.style.width = '34px';
                cursor.style.height = '34px';
            });

            link.addEventListener('mouseleave', () => {
                cursor.style.width = '10px';
                cursor.style.height = '10px';
            });
        });