let pokemon = '피카츄'

function chagePokemon(){
  if(pokemon ==='피카츄') {
    pokemon ='야도란';
  } else {
    pokemon ='피카츄';
  }
  pokemonElement.textContent = pokemon;
}

//DOMContentLoaded 이벤트는 HTML 문서를 로드하고 DOM 트리를 완성했을 때 발생
document.addEventListener('DOMContentLoaded', function (){
  //문서 요소 식별 , 리액프 스타일의 방식 
  const root = document.getElementById('root');
  //요소 생성
  const pokemonContainer =document.createElement('div');
  pokemonContainer.id = 'poKemonContainer';
  //요소 생성
  const pokemonElement =document.createElement('hi');
  pokemonElement.id ='pokemon';
  pokemonElement.textContent =pokemon;
  //요소 생성
  const changeButton = this.document.createElement('button');
  changeButton.id = 'changeButton';
  changeButton.textContent ='Change Pokemon'

  //구분을 위해 id 값을 추가하였으나, 식별할 수 있다면 무엇이든 상관없음
  //이벤트 리스너의 콜백함수를 재사용하기위해 위의 미리 선언된 함수를 사용
  //호출한다고 표현하지 않고, 참조한다고 표현
  changeButton.addEventListener('clikc', chagePokemon);

  pokemonContainer.appendChild(pokemonElement);
  pokemonContainer.appendChild(changeButton);
  root.appendChild(pokemonContainer);
});