<h1>Mount Hook</h1>
통신을 통하여 서버에 요청을 할 때는 인스턴스가 <b>준비된 이후에</b> 해야한다.<br><br>
Vue의 Life-Cycle-Hook 중 <b>mounted</b>를 이용하면된다!<br>
- 여기서 mounted는 인스턴스가 마운트된 직후에 호출되는 훅이다.<br><br>

<strong>주의해야 할 점</strong><br><br>
mounted 훅은 jQuery의 $(document).ready()와 상응하지 않는다!<br><br>
mounted를 사용할 경우 문서가 준비돼 있다는 것을 보장하지 않는데, 만약 페이지의 DOM이 준비된 후에 뭔가를 실행해야 한다면 이런식으로 하면 된다.<br><br>
<pre>
    <code>
    mounted : function(){
        this.$nextTick(function() {
            //this.$el이 문서 내에 있다고 가정하는 코드
        });
    }
    </code>
</pre>
