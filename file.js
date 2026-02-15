// First run VSCode Live Server
fs('airlines.csv')
    .then(response => response.text())
    .then(csvText => {
        Papa.parse(csvText, {
            header: true,
            complete: function(results) {
                const spinner = document.getElementById('csvSpinner');
                results.data.forEach(row => {
                    const option = document.createElement('option');
                    option.textContent = row.Name;
                    spinner.appendChild(option);
                });
            }
        });
    })
    .catch(err => console.error("Could not load file:", err));