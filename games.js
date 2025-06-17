  const games = [
    {
      name: "바이오쇼크 인피니트",
      steamUrl: "https://store.steampowered.com/app/8870/BioShock_Infinite/",
      isthereUrl: "https://isthereanydeal.com/game/bioshock-infinite/info/",
      thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/8870/header.jpg",
      tags: ["싱글","RPG","클리어","하트"]
    },
    {
      name: "포탈2",
      steamUrl: "https://store.steampowered.com/app/620/Portal_2/",
      isthereUrl: "https://isthereanydeal.com/game/portal-2/info/",
      thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/620/header.jpg",
      tags: ["멀티","협동","퍼즐","클리어"]
    },
    {
      name: "It Takes Two",
      steamUrl: "https://store.steampowered.com/app/1426210/It_Takes_Two/",
      isthereUrl: "https://isthereanydeal.com/game/it-takes-two/info/",
      thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/1426210/header.jpg",
      tags: ["멀티","협동","클리어","하트눈","유튜브"],
      youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpXDxm54AdS5R6NnRaCG_pCW"
    },
    {
      name: "리스크 오브 레인 2",
      steamUrl: "https://store.steampowered.com/app/632360/Risk_of_Rain_2/",
      isthereUrl: "https://isthereanydeal.com/game/risk-of-rain-2/info/",
      thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/632360/header.jpg",
      tags: ["멀티","협동","TPS","클리어","하트","유튜브"],
      youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpVeRlCpRVGjTgne0PUda9n8"
    },
    {
      name: "쓰론브레이커",
      steamUrl: "https://store.steampowered.com/app/973760/Thronebreaker_The_Witcher_Tales/",
      isthereUrl: "https://isthereanydeal.com/game/thronebreaker-the-witcher-tales/info/",
      thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/973760/header.jpg",
      tags: ["싱글","퍼즐","클리어","하트","유튜브"],
      youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpU2iUiS8UyStUKpSuCb8oH0"
    },
    {
      name: "Gears 5",
      steamUrl: "https://store.steampowered.com/app/1097840/Gears_5/",
      isthereUrl: "https://isthereanydeal.com/game/gears-5/info/",
      thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/1097840/header.jpg",
      tags: ["멀티","협동","TPS","하트","클리어","유튜브"],
      youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpWqWT3OAIS-Wwf00ChWgOFm"
    },
    {
      name: "드래곤즈 도그마",
      steamUrl: "https://store.steampowered.com/app/367500/Dragons_Dogma_Dark_Arisen/",
      isthereUrl: "https://isthereanydeal.com/game/dragons-dogma-dark-arisen/info/",
      thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/367500/header.jpg",
      tags: ["싱글","RPG","클리어","노잼","유튜브"],
      youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpURxCJmGquoyZ9LnSPhp_3E"
    },
    {
      name: "오버쿡 2",
      steamUrl: "https://store.steampowered.com/app/728880/Overcooked_2/",
      isthereUrl: "https://isthereanydeal.com/game/overcooked-2/info/",
      thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/728880/header.jpg",
      tags: ["멀티","협동","요리","클리어","하트","유튜브"],
      youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpUmdbQcblMNIUQ1xVIjGhCq"
    },
    {
      name: "심포니 오브 워",
      steamUrl: "https://store.steampowered.com/app/1488200/Symphony_of_War_The_Nephilim_Saga/",
      isthereUrl: "https://isthereanydeal.com/game/symphony-of-war-the-nephilim-saga/info/",
      thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/1488200/header.jpg",
      tags: ["싱글","전략","클리어","유튜브"],
      youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpV5m7YRd9f-nK_TxTHLdPVD"
    },
    {
      name: "트라인 4",
      steamUrl: "https://store.steampowered.com/app/690640/Trine_4_The_Nightmare_Prince/",
      isthereUrl: "https://isthereanydeal.com/game/trine-4-the-nightmare-prince/info/",
      thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/690640/header.jpg",
      tags: ["싱글","협동","클리어","하트","유튜브"],
      youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpVydwi06qY7qeRNiiOhdxd_"
    },
    {
      name: "어 햇 인 타임",
      steamUrl: "https://store.steampowered.com/app/253230/A_Hat_in_Time/",
      isthereUrl: "https://isthereanydeal.com/game/a-hat-in-time/info/",
      thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/253230/header.jpg",
      tags: ["멀티","클리어","귀여움","하트눈","유튜브"],
      youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpXpRxGKmfU_B4vHVcELtW5h"
    },
    {
    name: "무빙 아웃",
    steamUrl: "https://store.steampowered.com/app/996770/Moving_Out/",
    isthereUrl: "https://isthereanydeal.com/game/moving-out/info/",
    thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/996770/header.jpg",
    tags: ["멀티", "협동","클리어","하트","유튜브"],
      youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpVvlavssEugaRQNyBup8noh"
    },
    {
    name: "무빙 아웃 2",
    steamUrl: "https://store.steampowered.com/app/1641700/Moving_Out_2/",
    isthereUrl: "https://isthereanydeal.com/game/moving-out-2/info/",
    thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/1641700/header.jpg",
    tags: ["멀티", "협동","하트","클리어","유튜브"],
      youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpWlIA6VtB3GAUhSCToX3uOQ"
    },
    {
    name: "트라인 5",
    steamUrl: "https://store.steampowered.com/app/1436700/Trine_5_A_Clockwork_Conspiracy/",
    isthereUrl: "https://isthereanydeal.com/game/trine-5-a-clockwork-conspiracy/info/",
    thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/1436700/header.jpg",
    tags: ["멀티", "협동", "클리어", "하트","유튜브"],
      youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpV8zVk9DJsfIIiZqIt3Fy6f"
    },
    {
      name: "어 웨이 아웃",
      steamUrl: "https://store.steampowered.com/app/1222700/A_Way_Out/",
      isthereUrl: "https://isthereanydeal.com/game/a-way-out/info/",
      thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/1222700/header.jpg",
      tags: ["멀티","협동","클리어","하트"]
    },
    {
    name: "저니 투 더 새비지 플래닛",
    steamUrl: "https://store.steampowered.com/app/973810/_____Journey_To_The_Savage_Planet/",
    isthereUrl: "https://isthereanydeal.com/game/journey-to-the-savage-planet/info/",
    thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/973810/header.jpg",
    tags: ["멀티", "클리어","하트","유튜브"],
      youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpUEaw5b0A4K1zYdBcTVB8Nk"
    },
    {
      name: "바이패드",
      steamUrl: "https://store.steampowered.com/app/1071870/Biped/",
      isthereUrl: "https://isthereanydeal.com/game/biped/info/",
      thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/1071870/header.jpg",
      tags: ["멀티","협동","유튜브"],
      youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpVk1Sro1Bp-9NSnCubZ7Bv2"
    },
    {
      name: "포탈 나이츠",
      steamUrl: "https://store.steampowered.com/app/374040/Portal_Knights/",
      isthereUrl: "https://isthereanydeal.com/game/portal-knights/info/",
      thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/374040/header.jpg",
      tags: ["멀티","RPG","클리어","귀여움","유튜브"],
      youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpVPPxRd42c1cmle3rTEFx0d"
    },
    {
      name: "휴먼 폴 플랫",
      steamUrl: "https://store.steampowered.com/app/477160/Human_Fall_Flat/",
      isthereUrl: "https://isthereanydeal.com/game/human-fall-flat/info/",
      thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/477160/header.jpg",
      tags: ["멀티","협동","클리어","하트","유튜브"],
      youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpXTHYY3Ggjy-zg1lttEoqey"
    },
    {
      name: "미아스마 크로니클스",
      steamUrl: "https://store.steampowered.com/app/1649010/Miasma_Chronicles/",
      isthereUrl: "https://isthereanydeal.com/game/miasma-chronicles/info/",
      thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/1649010/header.jpg",
      tags: ["싱글","RPG","클리어","유튜브"],
      youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpX-iNGoZ_ySnOHiNxj65Dw7"
    },
    {
      name: "블랙가드",
      steamUrl: "https://store.steampowered.com/app/249650/Blackguards/",
      isthereUrl: "https://isthereanydeal.com/game/blackguards/info/",
      thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/249650/header.jpg",
      tags: ["싱글","전략","턴제","클리어"]
    },
    {
      name: "구조대작전 라이브",
      steamUrl: "https://store.steampowered.com/app/1662570/Rescue_Party_Live/",
      isthereUrl: "https://isthereanydeal.com/game/rescue-party-live/info/",
      thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/1662570/header.jpg",
      tags: ["멀티","협동","클리어","하트","유튜브"],
      youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpUsrkUk0oIiwt6lGuQKAhbb"
    },
    {
      name: "우당탕탕 경주",
      steamUrl: "https://store.steampowered.com/app/1054430/Fling_to_the_Finish/",
      isthereUrl: "https://isthereanydeal.com/game/fling-to-the-finish/info/",
      thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/1054430/header.jpg",
      tags: ["멀티","협동","유튜브"],
      youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpWjHSIPy1NKTBpEt969WHAi"
    },
    {
      name: "성녀전기",
      steamUrl: "https://store.steampowered.com/app/994730/Banner_of_the_Maid/",
      isthereUrl: "https://isthereanydeal.com/game/banner-of-the-maid/info/",
      thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/994730/header.jpg",
      tags: ["싱글","RPG","전략","귀여움","클리어","하트","유튜브"],
      youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpVaIQKjyJCQ3TQ6ZeKovlki"
    },
    {
      name: "Joggernauts",
      steamUrl: "https://store.steampowered.com/app/747620/Joggernauts/",
      isthereUrl: "https://isthereanydeal.com/game/joggernauts/info/",
      thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/747620/header.jpg",
      tags: ["멀티","협동","클리어","하트","유튜브"],
      youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpX8B9zcyd59eZAZybkx3g2n"
    },
{
  name: "보더랜드2",
  steamUrl: "https://store.steampowered.com/app/49520/Borderlands_2/",
  isthereUrl: "https://isthereanydeal.com/game/borderlands-2/info/",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/49520/header.jpg",
  tags: ["멀티", "협동", "액션", "FPS", "RPG", "루터슈터","아직안함"]
},
{
  name: "팝유컴",
  steamUrl: "https://store.steampowered.com/app/2543180/_/",
  isthereUrl: "https://isthereanydeal.com/game/popycom/info/",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/2543180/header.jpg",
  tags: ["멀티", "FPS", "협동","귀여움","클리어","하트눈", "유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpXnOBB4JwG0fQEf6stmjZWX"
},
{
  name: "톰 클랜시의 디비전 2",
  steamUrl: "https://store.steampowered.com/app/2221490/Tom_Clancys_The_Division_2/",
  isthereUrl: "https://isthereanydeal.com/game/tom-clancys-the-division-2/info/",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/2221490/header.jpg",
  tags: ["멀티", "TPS", "협동", "하트","루터슈터", "유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpVTrLnkXiNhKZMs_d2dkauf"
},
  {
    name: "Operation: Tango",
    steamUrl: "https://store.steampowered.com/app/1335790/Operation_Tango/",
    isthereUrl: "https://isthereanydeal.com/game/operation-tango/info/",
    thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/1335790/header.jpg",
    tags: ["멀티", "협동", "클리어", "퍼즐", "하트", "유튜브"],
    youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpV8QD74s6onMpPjK6AYPTYO"
  },
  {
    name: "보더랜드3",
    steamUrl: "https://store.steampowered.com/app/397540/_3/",
    isthereUrl: "https://isthereanydeal.com/game/borderlands-3/info/",
    thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/397540/header.jpg",
    tags: ["멀티", "FPS", "오픈월드","루터슈터", "협동", "RPG", "아직안함"]
  },
  {
    name: "타이니 티나의 원더랜드",
    steamUrl: "https://store.steampowered.com/app/1286680/_/",
    isthereUrl: "https://isthereanydeal.com/game/tiny-tinas-wonderlands/info/",
    youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpWGVPjglusFO7gRZ-D7_es-",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1286680/capsule_616x353.jpg?t=1686625251",
    tags: ["멀티", "클리어함", "루터슈터","FPS","하트", "RPG", "판타지", "유튜브"]
  },
{
  name: "플레이트업!",
  steamUrl: "https://store.steampowered.com/app/1599600/_/",
  isthereUrl: "https://isthereanydeal.com/game/plateup/info/ ",  // 이건 네가 직접 찾아야 할 수도 있어
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpWqSekLvYelncv4EGeCdOzY",
  thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1599600/capsule_616x353.jpg?t=1686625251",  // 스팀 썸네일 주소 예시, 직접 찾아봐야 할 수도 있음
  tags: ["멀티", "파티", "요리","귀여움","클리어", "하트", "유튜브"]
},
{
  name: "Dota 2",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg",
  steamUrl: "https://store.steampowered.com/app/570/Dota_2/",
  isthereUrl: "",
  tags: ["멀티", "MOBA","하트","유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpWhHKnROmeTIiDGy8VDWiAB"
},
{
  name: "Grand Theft Auto V",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
  steamUrl: "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/",
  isthereUrl: "https://isthereanydeal.com/game/grand-theft-auto-v/info/",
  tags: ["멀티", "오픈월드", "액션","유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpX_3ro4FSkitXxE1flvVsYc"
},
{
  name: "Valheim",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/892970/header.jpg",
  steamUrl: "https://store.steampowered.com/app/892970/Valheim/",
  isthereUrl: "https://isthereanydeal.com/game/valheim/info/",
  tags: ["멀티", "하트", "생존","고난이도","유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpUFqQJRk82rjZFij6izqrgO"
},
{
  name: "Toodee and Topdee",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/1303950/header.jpg",
  steamUrl: "https://store.steampowered.com/app/1303950/Toodee_and_Topdee/",
  isthereUrl: "https://isthereanydeal.com/game/toodeeandtopdee/info/",
  tags: ["멀티", "퍼즐", "클리어","하트","유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpVCXMXTYBX9dda-4ah82zg3"
},
{
  name: "Trials of Fire",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/1038370/header.jpg",
  steamUrl: "https://store.steampowered.com/app/1038370/Trials_of_Fire/",
  isthereUrl: "https://isthereanydeal.com/game/trialsoffire/info/",
  tags: ["싱글", "전략", "카드", "로그라이트","유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpVt54hVyEKH1QxlbRQny_u4"
},
{
  name: "Young Souls",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/985900/header.jpg",
  steamUrl: "https://store.steampowered.com/app/985900/Young_Souls/",
  isthereUrl: "https://isthereanydeal.com/game/youngsouls/info/",
  tags: ["멀티", "비뎀업", "액션", "RPG","유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpXYR4Um-d4nSvEGW_B6lqdq"
},
{
  name: "Immortals Fenyx Rising",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/2221920/header.jpg",
  steamUrl: "https://store.steampowered.com/app/2221920/Immortals_Fenyx_Rising/",
  isthereUrl: "https://isthereanydeal.com/game/immortalsfenyxrising/info/",
  tags: ["싱글", "오픈월드", "액션", "퍼즐", "어드벤처","유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpXsGqHi2WxaM8uAI7WonPrF"
},
{
  name: "The Witcher 3: Wild Hunt",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
  steamUrl: "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/",
  isthereUrl: "https://isthereanydeal.com/game/thewitcher3wildhunt/info/",
  tags: ["싱글", "오픈월드", "액션", "RPG", "어드벤처", "GOTY","유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpUB5GC4Hy9mmc7siKmWLSFY"
},
{
  name: "Outward Definitive Edition",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/794260/header.jpg",
  steamUrl: "https://store.steampowered.com/app/794260/Outward_Definitive_Edition/",
  isthereUrl: "https://isthereanydeal.com/game/outward/info/",
  tags: ["멀티", "오픈월드", "RPG", "고난이도", "유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpVxVHEgj7vd15C7MgR9Qg5z"
},
{
  name: "Carry The Glass",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/3263320/header.jpg",
  steamUrl: "https://store.steampowered.com/app/3263320/Carry_The_Glass/",
  isthereUrl: "https://isthereanydeal.com/game/carrytheglass/info/",
  tags: ["멀티", "노잼", "유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpVcUtJrWq_IxHEk8YqpJX2X"
},
{
  name: "Unrailed 2 (언레일드2)",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/2211170/header.jpg",
  steamUrl: "https://store.steampowered.com/app/2211170/Unrailed_2_Back_on_Track__2/",
  isthereUrl: "https://isthereanydeal.com/game/unrailed2/info/",
  tags: ["멀티",  "협동", "인디", "캐주얼","클리어","하트", "유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpVealPkqFhu8-1Bzyi2IF7g"
},
{
  name: "Cuphead",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/268910/header.jpg",
  steamUrl: "https://store.steampowered.com/app/268910/Cuphead/",
  isthereUrl: "https://isthereanydeal.com/game/cuphead/info/",
  tags: ["멀티", "고난이도", "런앤건","협동", "인디", "유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpViQ0A4XuFxTPmiv8cp5qO_"
},
{
  name: "Solasta: Crown of the Magister",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/1096530/header.jpg",
  steamUrl: "https://store.steampowered.com/app/1096530/Solasta_Crown_of_the_Magister/",
  isthereUrl: "https://isthereanydeal.com/game/solasta-crown-of-the-magister/info/",
  tags: ["싱글", "멀티", "전략","TRPG","판타지", "하트", "유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpXCMYWe774syRitrZgRbelC"
},
{
  name: "Chained Together",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/2567870/header.jpg",
  steamUrl: "https://store.steampowered.com/app/2567870/Chained_Together/",
  isthereUrl: "https://isthereanydeal.com/game/chainedtogether/info/",
  tags: ["멀티", "플랫포머", "협동", "고난이도","클리어", "유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpVpa25rpvfZIWhDDPwESjel"
},
{
  name: "GOD EATER 3",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/899440/header.jpg",
  steamUrl: "https://store.steampowered.com/app/899440/GOD_EATER_3/",
  isthereUrl: "https://isthereanydeal.com/game/godeateriii/info/",
  tags: ["싱글", "멀티","액션", "유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpU6TupEzW1gvgp5wG36jqBt"
},
{
  name: "CODE VEIN",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/678960/header.jpg",
  steamUrl: "https://store.steampowered.com/app/678960/CODE_VEIN/",
  isthereUrl: "https://isthereanydeal.com/game/codevein/info/",
  tags: ["멀티", "소울라이크", "액션", "RPG","고난이도", "유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpVd5YXPT90mTPI4rmRrH82L"
},
{
  name: "Pathfinder: Kingmaker",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/640820/header.jpg",
  steamUrl: "https://store.steampowered.com/app/640820/Pathfinder_Kingmaker__Enhanced_Plus_Edition/",
  isthereUrl: "https://isthereanydeal.com/game/pathfinder-kingmaker-enhanced-plus-edition/info/",
  tags: ["싱글", "RPG", "전략", "하트", "유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpUQf5wacuIiVMePJRqhwT2O"
},
{
  name: "Titan Souls",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/297130/header.jpg",
  steamUrl: "https://store.steampowered.com/app/297130/Titan_Souls/",
  isthereUrl: "https://isthereanydeal.com/game/titansouls/info/",
  tags: ["싱글", "소울라이크", "픽셀", "고난이도"]
},
{
  name: "Shift Happens",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/359840/header.jpg",
  steamUrl: "https://store.steampowered.com/app/359840/Shift_Happens/",
  isthereUrl: "https://isthereanydeal.com/game/shifthappens/info/",
  tags: ["멀티", "클리어", "하트", "협동", "유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpUFxtIismQbtlom5vU15FER"
},
{
  name: "Warhammer: End Times - Vermintide",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/235540/header.jpg",
  steamUrl: "https://store.steampowered.com/app/235540/Warhammer_End_Times__Vermintide/",
  isthereUrl: "https://isthereanydeal.com/game/warhammerendtimesvermintide/info/",
  tags: ["멀티", "액션", "협동","고어", "판타지", "아직안함"],
  youtubePlaylistUrl: ""
},
{
  "name": "Warhammer: Vermintide 2",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/552500/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/552500/Warhammer_Vermintide_2/",
  "isthereUrl": "https://isthereanydeal.com/game/warhammervermintideii/info/",
  "tags": ["멀티", "액션", "협동","고난이도", "아직안함"]
},
{
  "name": "Warhammer 40,000: Darktide",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/1361210/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/1361210/Warhammer_40000_Darktide/",
  "isthereUrl": "https://isthereanydeal.com/game/warhammer-40000-darktide/info/",
  "tags": ["멀티", "액션", "협동","고난이도", "아직안함"]
},
{
  name: "Far Cry® 5",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/552520/header.jpg",
  steamUrl: "https://store.steampowered.com/app/552520/Far_Cry_5/",
  isthereUrl: "https://isthereanydeal.com/game/far-cry-5/info/",
  tags: ["싱글", "멀티", "액션", "오픈월드", "협동", "아직안함"],
},
{
  "name": "Wolfenstein: Youngblood",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/1056960/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/1056960/Wolfenstein_Youngblood/",
  "isthereUrl": "https://isthereanydeal.com/game/wolfensteinyoungblood/info/",
  "tags": ["멀티", "FPS", "액션", "코옵", "SF", "유튜브"],
  "youtubePlaylistUrl": "https://www.youtube.com/playlist?list=PLtgtY3ehtJpW4yCW6BoDCaC2Q7irzFBL8"
},
{
  name: "Farlight 84",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/1928420/header.jpg",
  steamUrl: "https://store.steampowered.com/app/1928420/Farlight_84/",
  isthereUrl: "",
  tags: ["멀티", "배틀로얄","귀여움","TPS","하트","유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpX4JQSeIxy7rqsINIGmEINq"
},
{
  name: "Stardew Valley",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg",
  steamUrl: "https://store.steampowered.com/app/413150/Stardew_Valley/",
  isthereUrl: "https://isthereanydeal.com/game/stardew-valley/info/",
  tags: ["싱글", "멀티", "캐주얼", "샌드박스", "생활", "픽셀", "아직안함"]
},
{
  "name": "파스파투 2: 방황하는 예술가",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/1571100/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/1571100/_2/",
  "isthereUrl": "https://isthereanydeal.com/game/passpartout-2-the-lost-artist/info/",
  "tags": ["싱글", "예술", "인디", "캐주얼", "픽셀", "아직안함","유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpVRMgRxOy36w-z54GFQjllq"
},
{
  "name": "톰 클랜시의 디비전",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/365590/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/365590/Tom_Clancys_The_Division/",
  "isthereUrl": "https://isthereanydeal.com/game/tom-clancys-the-division/info/",
  "tags": ["멀티", "TPS", "루터슈터", "온라인", "오픈월드", "하트", "클리어","유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpWlsHRcZGCQKm-i7CDl8DUF"
},
{
  name: "Fantasy General II",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/1025440/header.jpg",
  steamUrl: "https://store.steampowered.com/app/1025440/Fantasy_General_II/",
  isthereUrl: "https://isthereanydeal.com/game/fantasygeneralii/info/",
  tags: ["싱글", "턴제", "전략", "판타지", "전술", "클리어", "유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpVo_PKvdi2XNmVb88RSKAg2"
},
{
  name: "반지의 제왕: 모리아로의 귀환™",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/2933130/header.jpg",
  steamUrl: "https://store.steampowered.com/app/2933130/_/",
  isthereUrl: "https://isthereanydeal.com/game/the-lord-of-the-rings-return-to-moria/info/",
  tags: ["멀티", "생존", "하트", "판타지", "협동", "유튜브"],
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLtgtY3ehtJpVJbh-c8Z4jCp2d_PXity6e"
},
{
  "name": "빼앗긴 왕국",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/1330000/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/1330000/_/",
  "isthereUrl": "https://isthereanydeal.com/game/stolen-realm/info/",
  "tags": ["싱글","멀티", "클리어","판타지","턴제", "유튜브"],
  "youtubePlaylistUrl": "https://www.youtube.com/playlist?list=PLtgtY3ehtJpWxE9MGSJFmQ4YYFl4pxgyV"
},
{
  "name": "Aliens: Fireteam Elite",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/1549970/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/1549970/Aliens_Fireteam_Elite/",
  "isthereUrl": "https://isthereanydeal.com/game/aliens-fireteam-elite/info/",
  "tags": ["멀티", "협동", "클리어", "TPS", "하트", "유튜브"],
  "youtubePlaylistUrl": "https://www.youtube.com/playlist?list=PLtgtY3ehtJpXlvADlz8cbnjCK-3IPEpi1"
},
{
  "name": "Ale & Tale Tavern",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/2683150/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/2683150/Ale__Tale_Tavern/",
  "isthereUrl": "https://isthereanydeal.com/game/ale-and-tale-tavern/info/",
  "tags": ["멀티", "클리어", "요리", "판타지", "생활", "유튜브"],
  "youtubePlaylistUrl": "https://www.youtube.com/playlist?list=PLtgtY3ehtJpX5AXH0GCaipRNeEDazg3jP"
},
{
  "name": "드래곤 에이지™ 인퀴지션",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/1222690/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/1222690/_/",
  "isthereUrl": "https://isthereanydeal.com/game/dragon-age-inquisition/info/",
  "tags": ["싱글", "멀티", "RPG", "판타지", "GOTY", "유튜브"],
  "youtubePlaylistUrl": "https://www.youtube.com/playlist?list=PLtgtY3ehtJpVl51Mlvim4wjqJiAJPk3yj"
},
{
  "name": "Deep Rock Galactic",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/548430/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/548430/Deep_Rock_Galactic/",
  "isthereUrl": "https://isthereanydeal.com/game/deep-rock-galactic/info/",
  "tags": ["멀티", "협동", "FPS", "액션"]
},
{
  "name": "Unrailed 1! (언레일드)",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/1016920/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/1016920/Unrailed/",
  "isthereUrl": "https://isthereanydeal.com/game/unrailed/info/",
  "tags": ["멀티", "협동", "캐주얼", "픽셀", "하트", "유튜브"],
  "youtubePlaylistUrl": "https://www.youtube.com/playlist?list=PLtgtY3ehtJpWAiXHvbbuiOgNjYwLHhHDj"
},
{
  "name": "Bang-On Balls: Chronicles",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/1227650/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/1227650/BangOn_Balls_Chronicles/",
  "isthereUrl": "https://isthereanydeal.com/game/bang-on-balls-chronicles/info/",
  "tags": ["멀티", "캐주얼", "액션", "하트", "유튜브"],
  "youtubePlaylistUrl": "https://www.youtube.com/playlist?list=PLtgtY3ehtJpXOfkzCEZjsxI_90_Jap_3d"
},
{
  "name": "For The King",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/527230/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/527230/For_The_King/",
  "isthereUrl": "https://isthereanydeal.com/game/for-the-king/info/",
  "tags": ["멀티", "턴제", "전략", "RPG", "하트", "유튜브"],
  "youtubePlaylistUrl": "https://www.youtube.com/playlist?list=PLtgtY3ehtJpVFvBmIr0qMwTHDDsNFeXwl"
},
{
  "name": "DEATH STRANDING DIRECTOR'S CUT",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/1850570/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/1850570/DEATH_STRANDING_DIRECTORS_CUT/",
  "isthereUrl": "https://isthereanydeal.com/game/death-stranding-directors-cut/info/",
  "tags": ["싱글", "액션", "어드벤처", "노잼", "유튜브"],
  "youtubePlaylistUrl": "https://www.youtube.com/playlist?list=PLtgtY3ehtJpVU6Pu7g0HvDrFcVCCUNDM-"
},
{
  "name": "Bloodstained: Ritual of the Night",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/692850/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/692850/Bloodstained_Ritual_of_the_Night/",
  "isthereUrl": "https://isthereanydeal.com/game/bloodstained-ritual-of-the-night/info/",
  "tags": ["싱글", "액션", "어드벤처", "메트로배니아", "유튜브"],
  "youtubePlaylistUrl": "https://www.youtube.com/playlist?list=PLtgtY3ehtJpVBI_VNmcw6LX8NePkUEusa"
},
{
  "name": "Spirit of the Island",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/1592110/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/1592110/Spirit_of_the_Island/",
  "isthereUrl": "https://isthereanydeal.com/game/spirit-of-the-island/info/",
  "tags": ["멀티", "어드벤처", "캐주얼", "귀여움", "하트", "유튜브"],
  "youtubePlaylistUrl": "https://www.youtube.com/playlist?list=PLtgtY3ehtJpVPlRzVJEn2K8JUNa7NzBsm"
},
{
  "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/1361510/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/1361510/Teenage_Mutant_Ninja_Turtles_Shredders_Revenge/",
  "isthereUrl": "https://isthereanydeal.com/game/teenage-mutant-ninja-turtles-shredders-revenge/info/",
  "tags": ["멀티", "비뎀업", "레트로", "픽셀", "유튜브"],
  "youtubePlaylistUrl": "https://www.youtube.com/playlist?list=PLtgtY3ehtJpWR49IMtsyZYAEmzyhnjUM5"
},
{
  "name": "Tomb Raider",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/203160/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/203160/Tomb_Raider/",
  "isthereUrl": "https://isthereanydeal.com/game/tomb-raider/info/",
  "tags": ["싱글", "액션", "어드벤처", "하트", "클리어", "유튜브"],
  "youtubePlaylistUrl": "https://www.youtube.com/playlist?list=PLtgtY3ehtJpWF96UILa4F6VLazcqJEE5A"
},
{
  "name": "Divinity: Original Sin 2 – Definitive Edition",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/435150/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/435150/Divinity_Original_Sin_2__Definitive_Edition/",
  "isthereUrl": "https://isthereanydeal.com/game/divinity-original-sin-2-definitive-edition/info/",
  "tags": ["멀티", "턴제", "RPG", "판타지", "GOTY", "하트", "유튜브"],
  "youtubePlaylistUrl": "https://www.youtube.com/playlist?list=PLtgtY3ehtJpXDh1MBYGYSlJzwYThyvhMQ"
},
{
  "name": "Palia",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/2707930/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/2707930/Palia/",
  "isthereUrl": "https://isthereanydeal.com/game/palia/info/",
  "tags": ["멀티", "생활", "귀여움", "하트", "유튜브"],
  "youtubePlaylistUrl": "https://www.youtube.com/playlist?list=PLtgtY3ehtJpXC6icz6aS8W_-hJSmZktLi"
},
{
  "name": "Styx: Shards of Darkness",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/355790/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/355790/Styx_Shards_of_Darkness/",
  "isthereUrl": "https://isthereanydeal.com/game/styx-shards-of-darkness/info/",
  "tags": ["멀티", "잠입", "액션", "고블린", "하트눈", "클리어", "유튜브"],
  "youtubePlaylistUrl": "https://www.youtube.com/playlist?list=PLtgtY3ehtJpUq9E16A2VFLW16Bzeh_MAI"
},
{
  "name": "WE WERE HERE SERIES",
  "thumbnail": "https://shared.fastly.steamstatic.com/store_item_assets/steam/bundles/12260/c15kejlk2t8gwena/ceb2dced34dbf68fde24f4e1d0c6d7f10856309e/header_586x192.jpg?t=1729079694",
  "steamUrl": "https://store.steampowered.com/bundle/12260/We_Were_Here_Series/",
  "isthereUrl": "https://isthereanydeal.com/game/we-were-here-forever/info/",
  "tags": ["멀티", "퍼즐", "협동", "하트", "클리어", "유튜브"],
  "youtubePlaylistUrl": "https://www.youtube.com/playlist?list=PLtgtY3ehtJpU0UHkE1IXQE4JQhPJ0wF-5"
},
{
  "name": "Full Metal Furies",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/416600/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/416600/Full_Metal_Furies/",
  "isthereUrl": "https://isthereanydeal.com/game/full-metal-furies/info/",
  "tags": ["멀티", "액션", "협동", "하트", "클리어", "유튜브"],
  "youtubePlaylistUrl": "https://www.youtube.com/playlist?list=PLtgtY3ehtJpWbMsaIorRa_BTOW-Q6R1VA"
},
{
  "name": "Unravel Two",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/1225570/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/1225570/Unravel_Two/",
  "isthereUrl": "https://isthereanydeal.com/game/unravel-two/info/",
  "tags": ["멀티", "퍼즐","캐주얼", "하트", "유튜브"],
  "youtubePlaylistUrl": "https://www.youtube.com/playlist?list=PLtgtY3ehtJpVI0EYkarzlN5sqnYJW8Dwp"
},
{
  "name": "Dinkum",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/1062520/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/1062520/Dinkum/",
  "isthereUrl": "https://isthereanydeal.com/game/dinkum/info/",
  "tags": ["멀티", "생활", "탐험", "샌드박스","협동", "생존", "아직안함"]
},
{
  "name": "루마섬",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/2408820/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/2408820/_/",
  "isthereUrl": "https://isthereanydeal.com/game/luma-island/info/",
  "tags": ["멀티", "생활", "귀여움", "캐주얼", "탐험", "아직안함"]
},
{
  "name": "Remnant: From the Ashes",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/617290/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/617290/Remnant_From_the_Ashes/",
  "isthereUrl": "https://isthereanydeal.com/game/remnant-from-the-ashes/info/",
  "tags": ["싱글", "멀티", "협동", "TPS", "액션", "판타지", "고난이도", "아직안함"]
},
{
  "name": "Grounded",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/962130/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/962130/Grounded/",
  "isthereUrl": "https://isthereanydeal.com/game/grounded/info/",
  "tags": ["멀티", "협동", "생존", "액션", "탐험", "생활", "아직안함"]
},
{
  "name": "Smalland: Survive the Wilds",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/768200/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/768200/Smalland_Survive_the_Wilds/",
  "isthereUrl": "https://isthereanydeal.com/game/smalland-survive-the-wilds/info/",
  "tags": ["멀티", "생존", "탐험", "오픈월드", "캐주얼", "아직안함"]
},
{
  "name": "리벤지 오브 더 새비지 플레닛",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/2787320/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/2787320/______Revenge_of_the_Savage_Planet/",
  "isthereUrl": "https://isthereanydeal.com/game/revenge-of-the-savage-planet/info/",
  "tags": ["멀티", "액션", "판타지", "캐주얼", "아직안함"]
},
{
  "name": "Little Kitty, Big City",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/1177980/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/1177980/Little_Kitty_Big_City/",
  "isthereUrl": "https://isthereanydeal.com/game/little-kitty-big-city/info/",
  "tags": ["싱글", "귀여움", "생활","고양이", "캐주얼", "탐험", "아직안함"]
},
{
  "name": "The Elder Scrolls Online",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/306130/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/306130/The_Elder_Scrolls_Online/",
  "isthereUrl": "https://isthereanydeal.com/game/the-elder-scrolls-online/info/",
  "tags": ["멀티", "오픈월드", "판타지", "협동", "아직안함"]
},
{
  "name": "Split Fiction",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/2001120/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/2001120/Split_Fiction/",
  "isthereUrl": "https://isthereanydeal.com/game/split-fiction/info/",
  "tags": ["멀티", "퍼즐", "어드벤처", "협동", "아직안함"]
},
{
  "name": "Verdun",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/242860/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/242860/Verdun/",
  "isthereUrl": "https://isthereanydeal.com/game/verdun/info/",
  "tags": ["멀티", "FPS", "전쟁", "아직안함"]
},
{
  "name": "인피니티 스트랏슈 드래곤 퀘스트 다이의 대모험",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/1895810/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/1895810/_/",
  "isthereUrl": "https://isthereanydeal.com/game/infinity-strash-dragon-quest-the-adventure-of-dai/info/",
  "tags": ["싱글", "RPG", "액션", "판타지","하트","노잼", "아직안함"]
},
{
  name: "EARTH DEFENSE FORCE 5",
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/1007040/header.jpg",
  steamUrl: "https://store.steampowered.com/app/1007040/EARTH_DEFENSE_FORCE_5/",
  isthereUrl: "https://isthereanydeal.com/game/earth-defense-force-5/info/",
  tags: ["싱글", "멀티", "액션", "슈팅", "협동", "아직안함"]
},
{
  "name": "Don't Starve Together",
  "thumbnail": "https://cdn.cloudflare.steamstatic.com/steam/apps/322330/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/322330/Dont_Starve_Together/",
  "isthereUrl": "https://isthereanydeal.com/game/dont-starve-together/info/",
  "tags": ["멀티", "생존", "협동", "아직안함"]
},
{
  "name": "Tom Clancy's Ghost Recon® Wildlands",
  "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/460930/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/460930/Tom_Clancys_Ghost_Recon_Wildlands/",
  "isthereUrl": "https://isthereanydeal.com/game/tom-clancys-ghost-recon-wildlands/info/",
  "tags": ["싱글", "멀티", "액션", "오픈월드", "슈팅", "아직안함"]
},
{
  "name": "Tom Clancy's Ghost Recon® Breakpoint",
  "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/2231380/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/2231380/Tom_Clancys_Ghost_Recon_Breakpoint/",
  "isthereUrl": "https://isthereanydeal.com/game/tom-clancys-ghost-recon-breakpoint/info/",
  "tags": ["싱글", "멀티", "액션", "오픈월드", "슈팅", "아직안함"]
},
{
  "name": "Ys VIII: Lacrimosa of DANA",
  "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/579180/header.jpg",
  "steamUrl": "https://store.steampowered.com/app/579180/Ys_VIII_Lacrimosa_of_DANA/",
  "isthereUrl": "https://isthereanydeal.com/game/ys-viii-lacrimosa-of-dana/info/",
  "tags": ["싱글","협동", "액션","RPG", "어드벤처", "판타지", "아직안함"]
},
];
