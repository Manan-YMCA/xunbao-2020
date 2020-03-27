import React, { useState } from "react";
import $ from "jquery";

function Modal({ id }) {
  const [hint, setHint] = useState("");
  React.useEffect(() => {
    $.ajax({
      url: "https://mananxunbao.herokuapp.com/api/hint/",
      type: "POST",
      crossDomain: true,
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      cache: false,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      data: JSON.stringify({
        fid: localStorage.getItem("facebookid")
      }),
      complete: function(data) {
        setHint("Waiting from backend");
      }
    });
  }, [id]);

  return (
    <div>
      <button
        className="hint_button"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        type="button"
        id="myBtn"
        data-placement="right"
        title="Hint will cost you 20 points"
      ></button>

      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                HINT
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" id="modeltexthint">
              Hint : {hint}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
