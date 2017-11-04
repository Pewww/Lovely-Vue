<h2>Vue.js란?</h2>
2014년 처음 릴리즈를 시작으로 꾸준히 발전하고 있는 자바스크립트 프레임워크이다.
<br><br>
Vue.js는 React와 같이 View에 최적화된 프레임워크로써 다양한 특징들을 가진다.
<br><br>
1. MVC(Model-View-Controller)에서 'Controller'대신 철저히 'View' 모델을 가지는 MVVM(Model-View-ViewModel)패턴을 기반으로 디자인되었다.
<br><br>
2. React에서도 주 기능으로 뽑는 컴포넌트(Component)를 이용하여 재사용 가능한 UI를 묶고 뷰 레이어를 정리한다.
<br><br>
3. 템플릿(Template) 위주의 개발을 한다.
<br><br>
4. Virtual DOM의 구현체인 Snabb dom을 이용하여 렌더링(Rendering)을 한다.
<br>
- 이를 수정하여 내장적으로 사용하고 있기 때문에 버전을 신경 쓸 필요가 없다.
<br>
- HTML 형식의 *커스텀 엘리먼트를 이용해 Virtual DOM 렌더 함수로 컴파일하도록 내부에서 구현했다.
<br>
- 이 때 커스텀 엘리먼트란 웹 개발자가 새로운 HTML 태그를 생성하거나, 기존 HTML 태그를 보강 및 다른 개발자가 작성한 구성 요소를 확장할 수 있는 것을 의미한다.
<br><br><br>
**알아두면 좋을 것**
<li>Vuex</li>
<li><a href = "https://github.com/vuejs/vue-devtools">vue-devtools</a></li>
<br><br>

<h2>아키텍쳐(Architecture)</h2>
**뷰 모델(View Model)** : MVVM 패턴의 VM에 해당하며, MVC 패턴에서 C -> 즉 컨트롤러의 역할처럼 데이터를 관리하고 액션을 처리한다.
