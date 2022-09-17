'use strict';

const ham = document.querySelector('#js-hamburger'); 
const nav = document.querySelector('#js-nav'); 

ham.addEventListener('click', function () { 
  console.log('ok')
  ham.classList.toggle('active');
  nav.classList.toggle('active');
});

const answerText = [
  '約79万人', 'X-TECH', 'Internet of Things', 'Society5.0', 'Web3.0', '約5倍'
]

//correctChoiceには、正しい答えの配置（selectBoxの左から0,1,2）を記述
const quizList = [
  {questionNumber:'1', question:'日本のIT人材が2030年には最大どのくらい不足すると言われているでしょうか？' , selectBox1: '約28万人', selectBox2: '約79万人', selectBox3: '約183万人', reference:'経済産業省 2019年3月 － IT 人材需給に関する調査', correctChoice:1},
  {questionNumber:'2', question:'既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？' , selectBox1: 'INTECH', selectBox2: 'BIZZTECH', selectBox3: 'X-TECH', reference:null, correctChoice:2},
  {questionNumber:'3', question: 'IoTとは何の略でしょう？', selectBox1: 'Internet of Things', selectBox2: 'Integrate into Technology', selectBox3: 'Information  on Tool', reference:null, correctChoice:0},
  {questionNumber:'4', question: '日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？', selectBox1: 'Society 5.0', selectBox2: 'CyPhy', selectBox3: 'SDGs',reference:'Society5.0 - 科学技術政策 - 内閣府', correctChoice:0},
  {questionNumber:'5', question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？', selectBox1: 'Web3.0', selectBox2: 'NFT', selectBox3: 'メタバース',reference:null, correctChoice:0},
  {questionNumber:'6', question: '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？', selectBox1: '約2倍', selectBox2: '約5倍', selectBox3: '約11倍',reference:'Accenture Technology Vision 2021', correctChoice:1},
]

//問題のシャッフル
function shuffleArray(quizList) {
  for (let i = quizList.length - 1; i > 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    let tmpStorage = quizList[i];
    quizList[i] = quizList[rand];
    quizList[rand] = tmpStorage;
  }
}

shuffleArray(quizList);

console.log(quizList)

//クイズコンテナの作成、correctChoiceの割り当て
for (let quizNumber = 1; quizNumber <= 6; quizNumber++) {

  let quizBox = `<div class="quiz_${quizList[quizNumber-1].questionNumber}">`
  + `<div class="q_icon">Q${quizNumber}</div>`
  +`<h2>${quizList[quizNumber-1].question}</h2>`
  +`<img class="q${quizList[quizNumber-1].questionNumber}_image" src="./img/quiz/img-quiz0${quizList[quizNumber-1].questionNumber}.png"}>`
  +`<div class="q_answer">A</div>`
  +`<div class="option_wrapper" id="option_wrapper${quizList[quizNumber-1].questionNumber}">`;

//selectBox1が正解の時
  if (quizList[quizNumber-1].correctChoice === 0) {
    quizBox += `<div class="option" id="q${quizList[quizNumber-1].questionNumber}_correct">${quizList[quizNumber-1].selectBox1}`
  +`<div class="triangle"></div>`
  + `</div>`
  +`<div class="option" id="q${quizList[quizNumber-1].questionNumber}_miss1" >${quizList[quizNumber-1].selectBox2}`
  +`<div class="triangle"></div>`
  + `</div>`
  +`<div class="option" id="q${quizList[quizNumber-1].questionNumber}_miss2" >${quizList[quizNumber-1].selectBox3}`
  +`<div class="triangle"></div>`
  } 
//selectBox2が正解の時
  else if (quizList[quizNumber-1].correctChoice === 1) {
    quizBox += `<div class="option" id="q${quizList[quizNumber-1].questionNumber}_miss1">${quizList[quizNumber-1].selectBox1}`
  +`<div class="triangle"></div>`
  + `</div>`
  +`<div class="option" id="q${quizList[quizNumber-1].questionNumber}_correct" >${quizList[quizNumber-1].selectBox2}`
  +`<div class="triangle"></div>`
  + `</div>`
  +`<div class="option" id="q${quizList[quizNumber-1].questionNumber}_miss2" >${quizList[quizNumber-1].selectBox3}`
  +`<div class="triangle"></div>`
  } 
//selectBox3が正解の時
  else {
    quizBox += `<div class="option" id="q${quizList[quizNumber-1].questionNumber}_miss1">${quizList[quizNumber-1].selectBox1}`
  +`<div class="triangle"></div>`
  + `</div>`
  +`<div class="option" id="q${quizList[quizNumber-1].questionNumber}_miss2" >${quizList[quizNumber-1].selectBox2}`
  +`<div class="triangle"></div>`
  + `</div>`
  +`<div class="option" id="q${quizList[quizNumber-1].questionNumber}_correct">${quizList[quizNumber-1].selectBox3}`
  +`<div class="triangle"></div>`
  }

  const reference = quizList[quizNumber-1].reference
  if (reference!==null){
    quizBox += `</div>`
    +`</div>`
    +`<div class="q_source">${quizList[quizNumber-1].reference}</div>`
    + `</div>`
  } 

  const allQuizBox=document.getElementById('quiz_container');
  allQuizBox.insertAdjacentHTML('beforeend', quizBox);
}


for (let quizNumber = 1; quizNumber <= 6; quizNumber++) {
  const q_answer = document.getElementById('q' + quizNumber + '_correct')
  let clickCount = 0
  q_answer.addEventListener('click', () => {

    if (clickCount == 0) {
      q_answer.classList.add('option_click')

      const answer_container = document.createElement('div');
      answer_container.classList.add('q_answer_container')

      const q_correct_answer = document.createElement('div');
      q_correct_answer.classList.add('q_correct_answer')
      q_correct_answer.textContent = '正解！';

      const q_correct_detail = document.createElement('div');
      const q_answer_label = document.createElement('span');
      q_answer_label.classList.add('q_answer_label')
      q_answer_label.textContent = 'A';

      const q_answer_text = document.createElement('span');
      q_answer_text.classList.add('q_answer_text')
      q_answer_text.textContent = answerText[quizNumber-1];
      document.getElementById('option_wrapper'+ quizNumber).after(answer_container)
      answer_container.appendChild(q_correct_answer);

      answer_container.appendChild(q_correct_detail);

      q_correct_detail.appendChild(q_answer_label);
      q_correct_detail.appendChild(q_answer_text);

    }
    clickCount++;
  })  

  const q_missing1 = document.getElementById('q' + quizNumber + '_miss1')
  q_missing1.addEventListener('click', () => {

    if (clickCount == 0) {
      q_missing1.classList.add('option_click')

      const answer_container = document.createElement('div');
      answer_container.classList.add('q_missing_container')

      const q_missing_answer = document.createElement('div');
      q_missing_answer.classList.add('q_missing_answer')
      q_missing_answer.textContent = '不正解...';

      const q_correct_detail = document.createElement('div');
      const q_answer_label = document.createElement('span');
      q_answer_label.classList.add('q_answer_label')
      q_answer_label.textContent = 'A';

      const q_answer_text = document.createElement('span');
      q_answer_text.classList.add('q_answer_text')
      q_answer_text.textContent = answerText[quizNumber-1];;

      document.getElementById('option_wrapper' + quizNumber).after(answer_container)
      answer_container.appendChild(q_missing_answer);

      answer_container.appendChild(q_correct_detail);

      q_correct_detail.appendChild(q_answer_label);
      q_correct_detail.appendChild(q_answer_text);

    }
    clickCount++;
  })


  const q_missing2 = document.getElementById('q' + quizNumber +'_miss2')

  q_missing2.addEventListener('click', () => {
  
    if (clickCount == 0) {
      q_missing2.classList.add('option_click')

      const answer_container = document.createElement('div');
      answer_container.classList.add('q_missing_container')

      const q_missing_answer = document.createElement('div');
      q_missing_answer.classList.add('q_missing_answer')
      q_missing_answer.textContent = '不正解...';

      const q_correct_detail = document.createElement('div');
      const q_answer_label = document.createElement('span');
      q_answer_label.classList.add('q_answer_label')
      q_answer_label.textContent = 'A';

      const q_answer_text = document.createElement('span');
      q_answer_text.classList.add('q_answer_text')
      q_answer_text.textContent = answerText[quizNumber-1];;

      document.getElementById('option_wrapper' + quizNumber).after(answer_container)
      answer_container.appendChild(q_missing_answer);

      answer_container.appendChild(q_correct_detail);

      q_correct_detail.appendChild(q_answer_label);
      q_correct_detail.appendChild(q_answer_text);

    }
    clickCount++;
  })
}
