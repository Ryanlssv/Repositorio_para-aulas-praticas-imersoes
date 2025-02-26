const API_URL = 'http://localhost:3000';

//Busca e exibe documentos
async function fetchDocuments(){
    const response = await fetch(`${API_URL}/documents`);
    const documents = await response.json();
    const tableBody = document.getElementById('documentsTable');
    tableBody.innerHTML = '';

    documents.forEach(doc => {
        const row = document.createElement('tr');
        row.innerHTML =`
        <td>${doc.id}</td>
        <td>${doc.title}</td>
        <td>${doc.created_at}</td>
        <td><button onclick="deleteDocument(${doc.id})" class="delete-btn">❌</button></td>`;
        
        tableBody.appendChild(row);
    });
}

// Lidar com o envio do formulário para adicionar um novo documento

const form = document.getElementById('addDocumentForm');
form.addEventListener('submit',async(e) => {
    e.preventDefault();
    const title = document.getElementById('text').value;

    await fetch(`${API_URL}/documents`,{
        method:'POST',
        headers:{
            'content-Type': 'application/json',
        },
        body: JSON.stringify({title}),
    });
    form.reset();
    fetchDocuments(); //Atualiza a tabela

});

async function deleteDocument(id) {
    await fetch(`${API_URL}/documents/${id}`, {
        method: 'DELETE',
    });

    fetchDocuments(); // Atualiza a tabela
}


    //Busca inicial de documentos
    fetchDocuments();