'use strict';

const answerText = [
  '約79万人', 'X-TECH', 'Internet of Things', 'Society5.0', 'Web3.0', '約5倍'
]

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


