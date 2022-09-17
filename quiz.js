'use strict';


const answerText = [
  '約79万人', 'X-TECH', 'Internet of Things', 'Society5.0', 'Web3.0', '約5倍'
]

const quizList = [
  {questionNumber:'1', question:'日本のIT人材が2030年には最大どのくらい不足すると言われているでしょうか？' , selectBox1: '約28万人', selectBox2: '約79万人', selectBox3: '約183万人', reference:null},
  {questionNumber:'2', question:'既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？' , selectBox1: 'INTECH', selectBox2: 'BIZZTECH', selectBox3: 'X-TECH', reference:null},
  {questionNumber:'3', question: 'IoTとは何の略でしょう？', selectBox1: 'Internet of Things', selectBox2: 'Integrate into Technology', selectBox3: 'Information  on Tool', reference:null},
  {questionNumber:'4', question: '日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？', selectBox1: 'Society 5.0', selectBox2: 'CyPhy', selectBox3: 'SDGs',reference:'Society5.0 - 科学技術政策 - 内閣府'},
  {questionNumber:'5', question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？', selectBox1: 'Web3.0', selectBox2: 'NFT', selectBox3: 'メタバース',reference:null},
  {questionNumber:'6', question: '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？', selectBox1: '約2倍', selectBox2: '約5倍', selectBox3: '約11倍',reference:'Accenture Technology Vision 2021'},
]


for (let quizNumber = 1; quizNumber <= 6; quizNumber++) {
  const quizBox=
  `<div class="quiz_container">`
  + `<div class="quiz_${quizList[quizNumber-1].questionNumber}>`
      +`<div class="q_icon">Q${quizList[quizNumber-1].questionNumber}</div>`
    +`<h2>Q${quizList[quizNumber-1].question}</h2>`
    +`<img class="q${quizList[quizNumber-1].questionNumber}_image" src="./img/quiz/img-quiz0${quizList[quizNumber-1].questionNumber}.png"}></img>`
    +`<div class="q_answer">A</div>`
    +`<div class="option_wrapper">`
      +`<div class="option">${quizList[quizNumber-1].selectBox1}</div>`
      +`<div class="triangle"></div>`
      +`<div class="option">${quizList[quizNumber-1].selectBox2}</div>`
      +`<div class="triangle"></div>`
      +`<div class="option">${quizList[quizNumber-1].selectBox3}</div>`
      +`<div class="triangle"></div>`
      +`<div class="q_source"></div>`
    +`</div>`
  +`</div>`;

  const allQuizBox=document.getElementById('allQuizBox');
  allQuizBox.insertAdjacentHTML('beforeend', quizBox);

  
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
