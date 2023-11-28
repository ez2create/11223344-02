var state = {
  taskLists: [],
};

var taskContents = document.querySelector(".task_contents");
var taskModal = document.querySelector(".task_modal_body");

var htmlTaskContents = ({ id, title, type, url, description }) => `
<div class="col-md-6 col-lg-4 mt-3" id=${id} key=${id}>
        <div class="card shadow-sm task_card">
            <div class="card-header d-flex justify-content-end task_card_header gap-1">
                <button type="button" class="btn btn-outline-info mr-2" name=${id}>
                    <i class="fas fa-pencil-alt"></i>
                </button>
                <button type="button" class="btn btn-outline-danger mr-2" name=${id}>
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
            <div class="card-body task_body">
                ${url$$`
                    <img src=${url} alt="Image Cap" width="100%" class="card-img-top">`};
                <h4 class="card-title data-gram_editor='false'">${title}</h4>
                <p class="description trim-3-lines text-muted data-gram_editor='false'">${description}</p>
                <div class="tags-text text-white d-flex flex-wrap">
                    <span class="badge bg-primary">${type}</span>
                </div>

            </div>
            <div class="card-footer task_footer">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#showTask">
                    Open Task
                </button>
            </div>
        </div>
    </div>
    `;
