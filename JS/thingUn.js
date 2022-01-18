const thingUn = [
    {
        quoto : "미친짓이란 항상 똑같은 일을 되풀이하면서 다른결과를 기대하는 것이다.",
        author : "알베르트 아인슈타인",
    },
    {
        quoto : "어제와 똑같이 살면서 다른 내일을 기대하는것은 정신병 초기증세이다.",
        author : "알베르트 아인슈타인",
    },
    {
        quoto : "인생은 곱셈이다. 어떤 기회가 와도 내가 제로면 아무런 의미가 없다.",
        author : "나카무라 미츠루",
    },
    {
        quoto : "서두르지 말라. 그러나 쉬지도 말라",
        author : "요한 볼프강 괴테",
    },
    {
        quoto : "살야야 할 이유를 아는 사람은 어떠한 상황도 견딜 수 있다.",
        author : "니체",
    },
    {
        quoto : "연애에는 한 가지 법칙 밖에 없다 그것은.....사랑하는 사람을 행복하게 하는 것이다.",
        author : "스탕탈",
    },
    {
        quoto : "한 번 실패와 영원한 실패를 혼동하지 마라.",
        author : "F.스콧 핏제랄드",
    },
    {
        quoto : "'근거 없는 자신감?' 자신감에 근거 따윈 필요 없어",
        author : "스윙스",
    },
    {
        quoto : "안 하는 것보단 낫잖아",
        author : "더 콰이엇",
    },
    {
        quoto : "Make what you want to do as what you have to do. That's what others say about success.",
        author : "ZICO",
    },
];
const quoto =  document.querySelector('#queto span:first-child');// span first tag
const author =  document.querySelector('#queto span:last-child');

// Math.floor() 가 소수점 버려주는거
// Math.random() 가 랜덤으로 값을 줌 여기서 숫자를 곱하면 그 숫자의 -1 된 거 까지 랜덤하게 나옴
const todaysThingUn = thingUn[Math.floor(Math.random()*thingUn.length)];

// HTML에 넣기
quoto.innerHTML = todaysThingUn.quoto;
author.innerHTML = todaysThingUn.author;