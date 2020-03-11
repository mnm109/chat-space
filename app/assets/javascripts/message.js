$(function(){
  function buildHTML(message){
    if (message.content && message.image ) {
      var html =
        `<div class="main__chat__message" data-message-id=${message.id}>
          <div class="main__chat__message__info">
            <div class="main__chat__message__info__member">
              ${message.user_name}
            </div>
            <div class="main__chat__message__info__datetime">
              ${message.created_at}
            </div>
          </div>
          <div class="main__chat__message__text">
            <p class="main__chat__message__text__content">
              ${meaasage.content}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else if ( message.content ) {
      var html =
        `<div class="main__chat__message" data-message-id=${message.id}>
          <div class="main__chat__message__info">
            <div class="main__chat__message__info__member">
              ${message.user_name}
            </div>
            <div class="main__chat__message__info__datetime">
              ${message.created_at}
            </div>
          </div>
          <div class="main__chat__message__text">
            <p class="main__chat__message__text__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    } else if ( message.image ) {
      `<div class="main__chat__message" data-message-id=${message.id}>
        <div class="main__chat__message__info">
          <div class="main__chat__message__info__member">
            ${message.user_name}
          </div>
          <div class="main__chat__message__info__datetime">
            ${message.created_at}
          </div>
        </div>
        <img src=${message.image} >
      </div>`
    }
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function(data){
        console.log(data)
        var html = buildHTML(data);
        $('.main__chat__messages').append(html);
        $('.main__chat__messages').animate({ scrollTop: $('.main__chat__messages')[0].scrollHeight});
        $('form')[0].reset();
        $('.submit_btn').prop('disabled', false);
      })
      .fail(function(){
        alert("メッセージ送信に失敗しました");
        $('.submit_btn').prop('disabled', false);
      })
    var reloadMessages = function() {
      var last_message_id = $('.message:last').data("message-id");
      $.ajax({
        url: "api/messages",
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages) {
        console.log('succes');
      })
      .fail(function() {
        alert('error');
      });
    };
  });
});