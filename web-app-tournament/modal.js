{
  const open = document.getElementById('open');
  const open_modal = document.getElementById('open_modal');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');
  const modal_inner= document.getElementById('modal_inner')
  const spinner = document.getElementById('loading');
  const twitter= document.getElementById('twitter');
  const record = document.getElementById('record_btn');
  const awesome = document.getElementById('awesome');
  const share_font =document.getElementById('share_font');


  open.addEventListener('click', function () {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
    spinner.style.display ="none";
    awesome.style.display ="none";
  });

  open_modal.addEventListener('click', function () {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
    spinner.style.display ="none";
    awesome.style.display ="none";

  });

  close.addEventListener('click', function () {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });
  mask.addEventListener('click', function () {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });


  let timeID;
  // const loading =document.getElementById('record_btn');
  
  record.addEventListener('click', function () {
    modal_inner.style.display="none";
    twitter.style.display="none";
    record.style.display="none";
    awesome.style.display="none";
    spinner.style.display="block";
    share_font.style.display="none"
    
    function complete(){
      spinner.style.display="none";
      awesome.style.display="block";
      share_font.style.display="none";
    }
    timeID=setTimeout(complete,3000);

    const open_twitter= document.getElementById('twitter');
    const twitter_comment= document.getElementById('message').value;


  if(open_twitter.checked){
    function openTwitter(text) {
      const twitter = "https://twitter.com/intent/tweet?text="+text;
      window.open(twitter,'_blank');
    }
    openTwitter(twitter_comment);
  }
  }
  );
}



// {
//   const open = document.getElementById('open');
//   const close = document.getElementById('close');
//   const modal = document.getElementById('modal');
//   const mask = document.getElementById('mask');
//   const modal_inner= document.getElementById('modal_inner')
//   const spinner = document.getElementById('loading');
//   const twitter= document.getElementById('twitter');
//   const record = document.getElementById('record_btn');
//   const awesome = document.getElementById('awesome');

//   open.addEventListener('click', function () {
//     modal.classList.remove('hidden');
//     mask.classList.remove('hidden');
//     spinner.style.display ="none";
//     awesome.style.display ="none";
//   });
//   close.addEventListener('click', function () {
//     modal.classList.add('hidden');
//     mask.classList.add('hidden');
//   });
//   mask.addEventListener('click', function () {
//     modal.classList.add('hidden');
//     mask.classList.add('hidden');
//   });


//   let timeID;
//   const loading =document.getElementById('record_btn');
  
//   loading.addEventListener('click', function () {
//     modal_inner.style.display="none";
//     twitter.style.display="none";
//     record.style.display="none";
//     awesome.style.display="none";
//     spinner.style.display="block";
    
//     function print(){
//       spinner.style.display="none";
//       awesome.style.display="block"
//     }
//     timeID=setTimeout(print,3000);
//   }
//   );
// }


// {
//   const loading =document.getElementById('record_btn');
  
//   loading.addEventListener('click', function () {
//     modal.classList.remove('modal_inner', 'modal_left', 'modal_right', 'study_day', 'modal_font', 'study_content', 'content_detail');
//   });

// }


$('#datepicker').datepicker();




// {
//   const recordModal = document.getElementById('record_modal');
//   const record= document.getElementById('record_btn');
//   const mask = document.getElementById('mask');
//   const modal = document.getElementById('modal_inner');
//   const close = document.getElementById('close');
  

//   record.addEventListener('click', function () {
//     modal.classList.remove('record_hidden');
//     mask.classList.remove('record_hidden');
//     recordModal.classList.add('record_hidden');
//   });

//   close.addEventListener('click', function () {
//     modal.classList.add('hidden');
//     mask.classList.add('hidden');
//   });
//   mask.addEventListener('click', function () {
//     modal.classList.add('hidden');
//     mask.classList.add('hidden');
//   });

// }