function handleFileSelect(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    var files = evt.dataTransfer.files;

    if (files.length > 0) {
        var f = files[0];
        
        // Nur .usdz Dateien zulassen
        if (!f.name.endsWith('.usdz')) {
            alert('Nur .usdz Dateien sind zulässig!');
            return;
        }
        
        // Dateiinformationen anzeigen (optional)
        var output = [];
        output.push('<li>', escape(f.name), ' (', f.type || 'n/a', ') - ',
                    f.size, ' bytes, last modified: ',
                    f.lastModifiedDate.toLocaleDateString(), '</li>');
        document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';

        // Export-Button aktivieren
        document.getElementById("exportBtn").disabled = false;
    }
}

function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
    dropZone.classList.add("hover");
}

function handleDragLeave() {
    dropZone.classList.remove("hover");
}

var dropZone = document.getElementById('drop_zone');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('dragleave', handleDragLeave, false);
dropZone.addEventListener('drop', handleFileSelect, false);

document.getElementById("exportBtn").addEventListener("click", function() {
    // Hier könnten Sie die Logik zum Hochladen der Datei hinzufügen und den ARKit QuickLook generieren
    alert('Exportieren klicken!');
});
