<h1>Vue.js에서의 생명주기 훅</h1>
<strong>생명주기 훅</strong>은 Vue 관련 이벤트가 발생할 때 실행되는 함수이다!
<br><br>
<h3 style = "text-underline:underline;">Vue 2에서의 훅 목록</h3>

<ul>
    <li>
        beforeCreate : 인스턴스가 초기화된 후 데이터 감시 및 이벤트/감시자를 설정하기 전 
    </li>
    <li>
        created : 인스턴스가 생성되고 난 후
    </li>
    <li>
        beforeMount : 마운트가 시작되기 직전
    </li>
    <li>
        mounted : 인스턴스가 이제 막 DOM에 마운트된 직후
    </li>
    <li>
        beforeUpdate : 데이터 변경 시 가상 DOM이 다시 렌더링되고 패치되기 전
    </li>
    <li>
        updated : 데이터가 변경된 후 가상 DOM이 다시 렌더링되고 패치된 후
    </li>
    <li>
        activated : <b>keep-alive</b>상태의 컴포넌트가 활성화될 때
    </li>
    <li>
        deactivated : <b>keep-alive</b>상태의 컴포넌트가 비활성화될 때
    </li>
    <li>
        beforeDestroy : Vue 인스턴스가 파괴되기 직전
    </li>
    <li>
        destroyed : Vue 인스턴스가 파괴된 후
    </li>
</ul>