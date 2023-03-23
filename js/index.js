// $(function () {
//     $(".js-addbut").click(function () {
//         var inputValue = $(".autoSizingInput").val();
//         alert(inputValue);
//     })
// });


// $(function () {

//     // 新增清單
//     $(".js-addbtn").click(function () {
//         var inputValue = $(".autoSizingInput").val();
//         // 判斷空值
//         if (inputValue === undefined || inputValue === '') {
//             alert("您尚未輸入！！");
//         } else {
//             $(".js-item").append(
//                 `<li class="d-flex">
//                 <label class="form-check-label section__item--flex">
//                     <input class="form-check-input section__item--input" type="checkbox">
//                         <span class="section__item--padding">${inputValue}</span>
//                     </label>
//                     <a class="section__item--svg">
//                 <svg viewBox="0 0 24 24">
//                     <path fill="currentColor"
//                         d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" />
//                 </svg>
//             </a>
//             </li>`
//             );
//         }
//     });

// 完成清單樣式
// $(document).on('change', ".section__item--input", function () {
//     var status = $(this).prop("checked");

//     if (status === true) {
//         $(this).siblings("span").addClass("js-checked");
//     } else if (status === false) {
//         $(this).siblings("span").removeClass("js-checked");
//     };
// });

//     // 刪除清單
//     $(document).on('click', ".section__item--svg", function () {
//         $(this).closest("li").remove();
//     })
// });



let html = '';
let count = 0;
// const id = [];

const data = [
    { id: "1666949502702", text: "學習 CSS", checked: false},
    { id: "1666949502703", text: "學習 Javascript", checked: false },
    { id: "1666949502704", text: "學習 Vue", checked: false },
]

// 顯示陣列清單

let filteredNumbers = data.map((item) => {
    // $(".section__item--input").prop("checked",true);
    // $(".section__item--input").prop({checked:true});

    
    html += `<li class="d-flex" data-index="${item.id}">
<label class="form-check-label section__item--flex">
    <input class="form-check-input section__item--input" type="checkbox" name="type"  ${(item.checked)?'checked':'' }> 
        <span class="section__item--padding">${item.text}</span>
    </label>
    <a class="section__item--svg" onclick="trashClicked(this)">
<svg viewBox="0 0 24 24">
    <path fill="currentColor"
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" />
</svg>
</a>
</li>`
    // index.id = count;
});


$('.js-item').append(html);

// $(".section__item--input").prop("checked",true,function(){
//     return checked ;
    
// });

// 新增清單
$(".js-addbtn").click(function () {

    inputvalue = document.getElementById('autoSizingInput').value;

    if (inputvalue === "") {
        alert("您尚未輸入！！");
    } else {
        count = new Date().getTime();
        dataString = count.toString();
        
        data.push({
            id: dataString, text: inputvalue, checked: false
        });
        // var result = data.forEach((item, i) => {
        //     item.id = i + 1;
        // });

        $('.js-item').append(
            `<li class="d-flex" data-index="${dataString}">
                        <label class="form-check-label section__item--flex">
                            <input class="form-check-input section__item--input" type="checkbox" name="type">
                                <span class="section__item--padding">${inputvalue}</span>
                            </label>
                            <a class="section__item--svg" onclick="trashClicked(this)">
                        <svg viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" />
                        </svg>
                    </a>
                    </li>`
        );
        return data;
    }
});
console.log(data);

// 刪除清單
function trashClicked(el) {    
    data.splice($(el).parent().index(), 1);
    $(el).parent().remove();

};

// 完成清單樣式
$(document).on('change', ".section__item--input", function (e) {

    var index = $(this).parent().parent().index();
    var status = $(this).prop("checked");

    if (status === true) {
        $('.section__item--input').prop('checked');
        $(this).siblings("span").addClass("js-checked");
        data[index].checked = status;
    } else if (status === false) {
        $(this).siblings("span").removeClass("js-checked");
        data[index].checked = status;
    };
    
    console.log(data[index].checked)
    console.log(data)
});










// data.map(({ text }) =>
//     html += `<li class="d-flex">
//     <label class="form-check-label section__item--flex">
//         <input class="form-check-input section__item--input" type="checkbox"> 
//             <span class="section__item--padding">${text}</span>
//         </label>
//         <a class="section__item--svg">
//     <svg viewBox="0 0 24 24">
//         <path fill="currentColor"
//             d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" />
//     </svg>
// </a>
// </li>`
// )


// var result = data.forEach((item, i) => {
//     item.id = count + 1;
// });


// $.getJSON( "./json/index.json", function( data ) {
//     var items = [];
//     $.each( data, function( key, val ) {
//       items.push( "<li id='" + key + "'>" + val + "</li>" );
//     });

//     $( "<ul/>", {
//       "class": "section__item--padding",
//       html: items.join( "" )
//     }).appendTo( "body" );
//   });


// $.ajax({
//     type: "GET",
//     dataType: "json",
//     url: "./json/index.json",

// });

// fetch("./json/index.json")
//     .then(response => {
//         return response.json();
//     })
//     .then(jsondata => console.log(jsondata));