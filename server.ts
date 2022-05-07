const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/pokemon", (req: any, res: any) => {
  res.send({
    data: [
      {
        id: "001",
        name: "이상해씨",
        image:
          "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000101.png",
        description:
          "태어나서부터 얼마 동안은 등의 씨앗으로부터 영양을 공급받아 크게 성장한다.",
        type: ["풀", "독"],
        division: "씨앗",
        height: 0.7,
        weight: 6.9,
      },
      {
        id: "002",
        name: "이상해풀",
        image:
          "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000201.png",
        description:
          "등의 봉오리가 부풀어 오르면 달콤한 냄새가 감돌기 시작한다. 큰 꽃이 필 조짐이다.",
        type: ["풀", "독"],
        division: "씨앗",
        height: 1.0,
        weight: 13.0,
      },
      {
        id: "003",
        name: "이상해꽃",
        image:
          "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000301.png",
        description:
          "비가 내린 다음 날은 등의 꽃향기가 강해진다. 향기에 이끌려 포켓몬이 모여든다.",
        type: ["풀", "독"],
        division: "씨앗",
        height: 2.0,
        weight: 100.0,
      },
      {
        id: "004",
        name: "파이리",
        image:
          "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000401.png",
        description:
          "파이리 꼬리의 불꽃은 생명의 등불이다. 건강할 때는 불꽃도 강하게 타오른다.",
        type: ["불꽃"],
        division: "도롱뇽",
        height: 0.6,
        weight: 8.5,
      },
      {
        id: "005",
        name: "리자드",
        image:
          "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000501.png",
        description:
          "리자드가 사는 바위산을 한밤중에 올려다보면 꼬리의 불꽃이 별처럼 보인다.",
        type: ["불꽃"],
        division: "화염",
        height: 1.1,
        weight: 19.0,
      },
      {
        id: "006",
        name: "리자몽",
        image:
          "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000601.png",
        description:
          "힘든 싸움을 경험한 리자몽일수록 불꽃 온도가 높아진다고 전해진다.",
        type: ["불꽃", "비행"],
        division: "화염",
        height: 1.7,
        weight: 90.5,
      },
      {
        id: "007",
        name: "꼬부기",
        image:
          "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000701.png",
        description:
          "등껍질에 숨어 몸을 보호한다. 상대의 빈틈을 놓치지 않고 물을 뿜어내어 반격한다.",
        type: ["물"],
        division: "꼬마거북",
        height: 0.5,
        weight: 9.0,
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
