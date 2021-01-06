# YOUTUBE CLONE PROJECT - 유튜브 클론 프로젝트

구글의 동영상 사이트인 YOUTUBE 클론 프로젝트입니다.  
회원가입, 로그인, 동영상 정보, 디테일 페이지, 동영상 업로드, 댓글, 좋아요, 구독 기능 서비스가 제작 되어있습니다.  
기간은 약 한달정도 소요되었고, 혼자 제작하였습니다. 

## 프로젝트 구성 기술 안내 

*client*폴더엔 프론트엔드 UI부분이 구성되어 있고, *server*폴더에 백엔드 부분이 구성되어 있습니다.  
  
- 프론트엔드 UI : React, Redux, Axios, Javascript, SCSS 
- 백엔드 : Node.js
- 데이터베이스 : MongoDB, Mongoose


## 프로젝트 기능 설명

- Nodejs API 설계 및 Restful API 구현
- Bcrypt 사용하여 사용자 PW 암호화, JWT를 사용하여 token 인증 기능 구현
- 동영상, 회원, 댓글, 좋아요 CREATE 구현
- Multer를 사용하여 동영상 저장, ffmpeg를 사용하여 썸네일 제작 및 저장 구현
- 리덕스를 사용하여 사용자 조회 로직 구현
- 사용자 개인별 구독 페이징 구현

## 느낀점과 보완이 필요한 부분

기존에 배웠던 class형 컴포넌트를 사용하지 않고 hook을 사용한 function형 컴포넌트를 활용해보았다. 익숙한 function형 컴포넌트를 사용하니 제작하기에 훨씬 수월했지만 아직 hook을 능숙히 사용하는데에 무리가 있어서 좀 더 공부가 필요하다고 느꼈다.  
또한 이번 기회에 처음 접한 Redux 사용 부분은 이번 프로젝트에서 가장 어려웠던 부분이였다. 상태관리를 하기엔 굉장히 간편했지만 제작 기능이 너무 어려워서 시간이 많이 소요된 부분이였다.🤪  
백엔드 부분은 나의 전문 분야가 아니기에 낯선 개념도 많았지만 Model, Middleware 그리고 Route등의 용어들과 많이 친해진듯하다. 또한 백엔드 구축 부분에선 유튜브의 강의를 참고 하면서 진행하여 다음 프로젝트는 동영상 매체의 도움 없이 진행해보려고 한다.  

사실 보완 해야 할 부분은 아직도 많고, 추가하고 싶은 부분도 많아서 조금 아쉽지만 only 퍼블리싱을 진행하던 나는 백엔드가 함께 구성된 유튜브는 프로젝트 결과물을 볼 때면 가슴이 웅장해진다...😂  
내가 구상하는 기능들이 나의 지난 경험에 비해 욕심부리고 있는 듯 느껴 좌절하기도 했지만, 프론트엔드는 공부하면 할 수록 백엔드 기술을 욕심낼 수 밖에 없는 것 같다..  
재밌다! 이 마음 그대로 다음 플젝도 진행해보자!!💪💪

## 데모 영상

랜딩 페이지에서는 기존 사용자들이 업로드 해두었던 영상들이 보여지며, 영상을 올린 제작자의 정보와 영상 제목, 조회수와 업로드 날짜가 함께 노출된다.

### 회원가입, 로그인

구현 : 상단의 Header를 통해 접근 가능하고 회원가입 창에서 입력한 정보를 MongoDB에 저장하여 회원가입이 실행, DB의 정보들을 토대로 로그인이 실행된다.

![login](https://user-images.githubusercontent.com/52736505/103733515-42d5f280-502d-11eb-8278-7af0afaad3cf.gif)

### 동영상 업로드

구현 : 업로드 페이지는 로그인이 되어 있는 사용자만 접근 가능하며, 사용자의 컴퓨터에 있는 동영상을 업로드 할 수 있다. 제목은 동영상의 제목으로 기본 생성되지만, 변경이 가능하다.

![upload](https://user-images.githubusercontent.com/52736505/103733519-436e8900-502d-11eb-8626-cb046996ec3a.gif)

### 댓글 

구현 : 업로드가 된 동영상에 댓글을 입력할 수 있다. 댓글 데이터는 입력자와 비디오 정보와 함께 DB에 저장되고, 비디오의 상세페이지에서는 비디오 정보를 토대로 관련 댓글 정보를 추출하여 댓글 영역에 띄워준다. 댓글 데이터는 입력자의 정보와 함께 내림차순으로 노출된다.

![comment](https://user-images.githubusercontent.com/52736505/103733508-40739880-502d-11eb-9e32-20b14955d0db.gif)

### 좋아요

구현 : 영상과 댓글에 모두 좋아요 기능이 가능하다. 좋아요를 누른 입력자와 비디오 정보 또는 댓글 정보가 함께 DB에 저장되고, 비디오와 댓글 정보를 토대로 관련 좋아요 정보의 갯수를 파악하여 보여준다. 사용자가 이전에 좋아요를 누른 경우 active 효과가 실행된다.

![like](https://user-images.githubusercontent.com/52736505/103733513-423d5c00-502d-11eb-9a30-a525d10c5228.gif)

### 구독

구현 : 나 이외에 다른 사용자의 동영상을 조회할 경우 구독버튼이 노출된다. 이미 구독을 누른 경우 구독 버튼은 비활성화 되어있다. 구독을 하면 구독 페이지에서 내가 구독한 사람의 영상만 볼 수 있다.

![subscribe](https://user-images.githubusercontent.com/52736505/103733517-436e8900-502d-11eb-9058-fe6af9e31062.gif)
