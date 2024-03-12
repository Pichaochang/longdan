import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { lpAddress } from '@/unit/address'
const resources = {
  "zh-HK": {
      "translation": {
          "xx1": "",
          "app": {
              "langauage": {
                  "checkoutLabel": "語言",
                  "cancelText": "取消",
                  "confirmText": "確定"
              },
              "signError": "請使用本人真實錢包進行簽名",
              "empty": "無權訪問，請檢查訪問連結是否正確",
              "emptyText": "無權訪問，請重新簽名",
              "clickText": "點擊簽名"
          },
          "private": {
              "alert": {
                  "userFail": "用戶資訊查詢失敗，請檢查網絡或刷新頁面",
                  "end": "您已完成私募",
                  "invalid": "推薦人無效",
                  "apploveFail": "授權失敗，請重新陞級",
                  "privateFail": "私募失敗",
                  "copyShareSuccess": "邀請連結已複製到剪切板:",
                  "returnAlert": "複製失敗，請先完成私募",
                  "privateSuccess": "恭喜您，私募成功！"
              },
              "label": {
                  "limt": "私募額度",
                  "shareLabel": "點擊邀請",
                  "end": "您已完成私募",
                  "endLabel": "已結束",
                  "goLabel": "去私募",
                  "noOpenLabel": "私募暫未開啟",
                  "noAllow": "您本人已私募過不能再次私募"
              },
              "content": {
                  "h4": "麒麟(QILIN)是加密貨幣領域繼比特幣之後的加密經濟模型的重大顛覆式創新",
                  "title1": "一、去除中心化大底池，做到絕對安全",
                  "title2": "二、用戶持有LP，任何人都不持有幣，無任何拋售擠壓和泡沫、以及砸盤風險",
                  "title3": "三、幣量無限通縮，幣量基於底池的數量無限通縮",
                  "title4": "四、只漲不跌",
                  "title5": "五、採用二二滑落團隊結構，迅速壯大團隊",
                  "title6": "六、程式碼開源，許可權全部丟棄，無項目方，無任何後門"
              }
          },
          "upgradation": {
              "alert": {
                  "initError": "初始化錯誤，請刷新頁面或檢查網絡連接",
                  "copySuccess": "分享連結已複製到剪切板"
              },
              "title": {
                  "titleProperty": "持倉資產",
                  "titleReward": "收益明細"
              },
              "shareLabel": "邀請好友",
              "component": {
                  "level": {
                      "alert": {
                          "recInfoFail": "推薦人不存在",
                          "upgradeFail": "交易失敗"
                      },
                      "levelMap": {
                          "no": "非會員",
                          "ordinary": "普通會員",
                          "silver": "白銀會員",
                          "gold": "黃金會員"
                      },
                      "label": {
                          "vipLevel": "會員等級",
                          "recLabel": "推薦人",
                          "emptyLabel": "暫無",
                          "buttonLabel": "陞級",
                          "gouami": "購買"
                      }
                  },
                  "property": {
                      "alert": {
                          "lookDetail": `Shushi-LP合約地址:${lpAddress}已複製到剪切版，請到錢包添加自定義代幣，即可查看錢包Shushi-LP餘額`,
                          "fall": "領取失敗請重新嘗試"
                      },
                      "label": {
                          "valueLabel": "價值",
                          "titleLabel": "分紅實时預測",
                          "claimBonusLabel": "領取",
                          "warning": "注意",
                          "str1": "為保證項目安全，所有計算均在鏈上運行，",
                          "str2": "只是在鏈上根據用戶實时算力和所有人總算力占比的實时預估值，動態變化幅度較大，並不代表您一定可以領取到這些分紅，實際領取數量會比該值少，",
                          "str3": "距上次領取時間超過24小時後才能領取。"
                      }
                  },
                  "reward": {
                      "label": {
                          "title1": "我的算力",
                          "title2": "算力分紅",
                          "title3": "直推獎勵",
                          "title4": "團隊獎勵"
                      }
                  },
                  "team": {
                      "alert": {
                          "copyFail": "複製失敗",
                          "copySuccess": "複製地址成功"
                      },
                      "label": {
                          "title": "我的團隊",
                          "leftLabel": "直接下屬",
                          "activeLabel": "複製",
                          "title2": "直推清單",
                          "levelTitle": "等級",
                          "emptyLabel": "暫無",
                          "person": "團隊人數",
                          "search": "査詢中，請等待"
                      }
                  }
              }
          },
          "mine": {
              "alert": {
                  "max": "當前最大購買額度",
                  "endFail": "交易失敗",
                  "apploveFail": "授權失敗",
                  "endSuccess": "交易完成",
                  "error": "系統錯誤",
                  "messageBuy": "升级的资金50%自动购买LPG，50%自动购买MATIC自动加池子。然后LP分配如下(100%全波出)",
                  "messageSell": "撤池手续费3%，LPG100%销毁，Matic回到个人钱包(币本位回到钱包)",
                  "maxInput": "當前最大購買額度:",
                  "done": "交易完成"
              },
              "tip": {
                  "noTip": "無額度",
                  "needUp": "陞級解鎖額度",
                  "max": "無上限"
              },
              "title1": "我的等級",
              "title2": "交易",
              "label": {
                  "levelLabel": "會員等級",
                  "descLabel": "可買入額度",
                  "upLevelLabel": "前往首頁陞級",
                  "upLevelLabel2": "前往首頁購買",
                  "balanceLabel": "帳戶餘額",
                  "label1": "預估",
                  "labe2": "買入",
                  "label3": "收到",
                  "label4": "數量",
                  "label5": "賣出"
              }
          },
          "introduce": {
              "title": "銘文協定(LPG)只漲不跌開始去中心化金融新篇章",
              "content": {
                  "subStr": "銘文協定由新加坡繁榮資本領投，聯合馬來西亞鼎力資本發起； 基於Polygon（Matic）公鏈生態構建完全去中心化金融商業生態，打造銘文交易所與元宇宙平臺； 為打造龐大用戶體系，平臺首創只漲不跌經濟模型為用戶在即將到來的牛市創造更多的主流資產（Matic），讓參與者實現自身價值。",
                  "title1": "項目立項",
                  "title2": "單邊上漲獨創模型",
                  "subTitle1": "項目由來:",
                  "subTitle2": "2022年12月份項目立項",
                  "subTitle3": "2023年2月份技術開發並獲得1000萬美金融資",
                  "subTitle4": "2023年8月份馬來西亞社區成立",
                  "subTitle5": "2023年9月份銘文交易所開發",
                  "subTitle6": "2023年10月確定獨特引流機制並開發系統2024年1月系統初步開發完成，進去測試階段",
                  "subTitle7": "2024年2月上線1.0引流系統",
                  "subTitle8": "2024年三季度上線銘文交易所",
                  "subTitle9": "2025年一季度上線Wbe.3直播平臺",
                  "subTitle10": "2024年三季度上線銘文交易所",
                  "subTitle11": "1.0初步共識-2024年一季度",
                  "subTitle12": "銘文協定，打造牛市最强資產倍增；用機制聯合坐莊只漲不跌+二二滑落，上線將會顛覆行業，帶動行業强共識，LP在自己手裡人人做莊家；四未來2年的機制模式無法超越銘文協議",
                  "subTitle13": "每天穩定漲3%一年4.8萬倍，買賣和陞級都漲邏輯覈心機制解析:LP是鑄造出來的沒有泡沫，LP對應的是池子裏的Matic秘買漲(全撥比)鑄造LP/賣也漲(全撥比)變現管道LP撤出，Matic給用戶(全額)、Lpg進黑洞銷毀了，幣不能砸盤所以只漲不跌。2二滑落滿點比特可得131070地址，團隊所產出收益不止百萬！！3購買資產包也漲(全撥比)LP天天漲價想買LP需要購買資產包！v1資產包=50 Uv2資產包=200Uv3資產包=500U秘注:小推大有燒傷陞級用的Matic先用50%自動購買LPG拉盤，然後用50%的Magic+買的LPG自動添加壽司池子，其中直推獲得20%LP、全網算力加權分紅20%LP、16層團隊獎勵32%LP節點6%LP、運營2%LP、科技2%LP；陞級占位靜態可拿二二滑落16層13萬多人陞級的2%總共獲得百萬U價值LP可以直接變現。備註:所有分紅的LP獎勵和買入的LP都是對應池子的Matic，沒有泡沫，完全正波比。",

                  "subTitle71": "1.無中央資金池（顛覆傳統模式）",
                  "subTitle72": "銘文協定（LPG）智慧合約佈署在Polygon（Matic）鏈，LP池子資產分散在所有用戶錢包，資產交由用戶保管，只有用戶本人才能操作贖回； 從根本上解决有人作惡和駭客攻擊的問題.",
                  "subTitle73": "2.安全係數高（用戶掌管自己資產）",
                  "subTitle74": "用戶持有的LP（Matic ➕ LPG），上線全部在池子，任何人都不持有LPG，不存在任何拋售和泡沫； LP分配在用戶自己錢包，完全由用戶自己掌管，不存在被別人拿走的風險.",
                  "subTitle75": "3.幣量無限通縮（顛覆式創新）",
                  "subTitle76": "LPG發行量10億枚，上線時全部加入底池，當用戶取出LP資產時，Matic回到錢包、LPG自動銷毀，無限通縮.",
                  "subTitle77": "4.只漲不跌（資產增值）",
                  "subTitle78": "銘文協定採用獨特創新機制由用戶持有LP，當用戶取出LP時，底池等額比例撤出，不會影響價格； 當用戶陞級和購買時，幣價上漲.",
                  "subTitle79": "5.網體打造優勢",
                  "subTitle80": "採用二二滑落的團隊架構，迅速壯大團隊，當團隊長在推廣過程中，下麵用戶享受滑落獎勵，能够刺激靜態用戶積極性，迅速壯大團隊，實現上幫下扶.",
                  "subTitle81": "6.完全去中心化",
                  "subTitle82": "程式碼全部開源，許可權全部拋弃，社區自治無莊家操控，鏈上自動運行，智慧合約只做分配、不保管任何資產，真正做到公平、公開、透明化.",
                  "subTitle83": "7.陞級用戶5倍出局",
                  "subTitle84": "所有陞級用戶獲得陞級金額的5倍自動出局，需複投才能享受網體收益，新增內迴圈，用戶更有動力持續分享.",

                  "w1": "玩法介紹",
                  "w2": "1.會員等級：",
                  "w3": "V1會員：50U陞級（無法購買LP）",
                  "w4": "V2會員：200U陞級（最大可購買400U的LP）",
                  "w5": "V3會員：500U陞級（可無限量購買LP）",
                  "w6": "2.陞級獎勵和團隊獎勵都有燒傷，比如：V1級別推薦用戶，陞級為V2級別，推薦人拿不到獎勵.",
                  "w7": "3.團隊架構採用16層二二滑落，上幫下扶，團隊最大可滑落131070人.",
                  "w8": "4.只有陞級時用戶獲得100%算力，每天享受全網算力分紅，直到5倍出局複投.",
              }
          },
          "bottom": {
              "title1": "首頁",
              "title2": "算力",
              "title22": "介紹",
              "title3": "交易"
          }
      }
  },
  "en-US": {
      "translation": {
          "app": {
              "langauage": {
                  "checkoutLabel": "language",
                  "cancelText": "cancellation",
                  "confirmText": "determine"
              },
              "signError": "Please use your real wallet for signature",
              "empty": "Please check if the access link is correct",
              "emptyText": "Unauthorized access, please sign again",
              "clickText": "Click to sign"
          },
          "private": {
              "alert": {
                  "userFail": "User information query failed. Please check the network or refresh the page",
                  "end": "You have completed the private placement",
                  "invalid": "Invalid recommender",
                  "apploveFail": "Authorization failed, please upgrade again",
                  "privateFail": "Private placement failure",
                  "copyShareSuccess": "Invitation link copied to clipboard",
                  "returnAlert": "Copying failed, please complete the private placement first",
                  "privateSuccess": "Congratulations, the private placement was successful!"
              },
              "label": {
                  "limt": "Private placement limit",
                  "shareLabel": "Click on invitation",
                  "end": "You have completed the private placement",
                  "endLabel": "Ended",
                  "goLabel": "Go private equity",
                  "noOpenLabel": "Private placement has not been opened yet",
                  "noAllow": "You have already made a private placement and cannot make another private placement"
              },
              "content": {
                  "h4": "Kirin is a major disruptive innovation in the cryptocurrency industry's crypto economy model following Bitcoin",
                  "title1": "1、 Remove the centralized large bottom pool to achieve absolute safety",
                  "title2": "2、Users hold LP, and no one holds currency, so there is no risk of selling, squeezing, foam, and crashing",
                  "title3": "3、 Infinite deflation of currency volume based on the quantity of the bottom pool",
                  "title4": "4、 Only rising but not falling",
                  "title5": "5、 Adopting a binary tree sliding team structure to rapidly expand the team",
                  "title6": "6、 Open source code, all permissions discarded, no project party, no backdoor"
              }
          },
          "upgradation": {
              "alert": {
                  "initError": "Initialization error, please refresh the page or check the network connection",
                  "copySuccess": "The sharing link has been copied to the clipboard"
              },
              "title": {
                  "titleProperty": "Holding assets",
                  "titleReward": "Revenue Details"
              },
              "shareLabel": "Invite friends",
              "component": {
                  "level": {
                      "alert": {
                          "recInfoFail": "The recommender does not exist",
                          "upgradeFail": "Transaction failed"
                      },
                      "levelMap": {
                          "no": "Non member",
                          "ordinary": "Ordinary members",
                          "silver": "Silver Member",
                          "gold": "Gold membership"
                      },
                      "label": {
                          "vipLevel": "Membership grade",
                          "recLabel": "reference",
                          "emptyLabel": "None",
                          "buttonLabel": "upgradation",
                          "gouami": "buy"
                      }
                  },
                  "property": {
                      "alert": {
                          "lookDetail": `Shushi-LP Contract address：${lpAddress} Copied to the cutout version, please add a custom token to the wallet to view the wallet's Cake LP balance`,
                          "fall": "Claim failed"
                      },
                      "label": {
                          "valueLabel": "value",
                          "titleLabel": "Estimated value",
                          "claimBonusLabel": "receive",
                          "warning": "notice",
                          "str1": "To ensure project security, all code runs on the chain,",
                          "str2": "Just based on the real-time estimated value of the user's real-time computing power and the proportion of everyone's total computing power on the chain, the dynamic change is large, and it does not necessarily mean that you can receive these dividends. The actual amount received will be less than this value!",
                          "str3": "Can only be claimed after more than 24 hours since the last claim."
                      }
                  },
                  "reward": {
                      "label": {
                          "title1": "My computing power",
                          "title2": "Calculation power dividend",
                          "title3": "Direct promotion rewards",
                          "title4": "Team rewards"
                      }
                  },
                  "team": {
                      "alert": {
                          "copyFail": "copy failed",
                          "copySuccess": "Successfully copied address"
                      },
                      "label": {
                          "title": "my team",
                          "leftLabel": "Direct Reports",
                          "activeLabel": "copy",
                          "title2": "Direct push list",
                          "levelTitle": "grade",
                          "emptyLabel": "None",
                          "person": "subordinate",
                          "search": "Query in progress, please wait"
                      }
                  }
              }
          },
          "mine": {
              "alert": {
                  "max": "Current maximum purchase limit",
                  "endFail": "Transaction failed",
                  "apploveFail": "privilege grant failed",
                  "endSuccess": "Transaction Completion",
                  "error": "system error",
                  "messageBuy": "50% of the upgraded funds will automatically purchase LPG, and 50% will automatically purchase MATIC with automatic pooling. Then LP allocation is as follows (100% full wave output).",
                  "messageSell": "Withdrawal fee of 3%, LPG100% destruction, Matic returned to personal wallet (currency standard returned to wallet.",
                  "maxInput": "Current maximum purchase limit:",
                  "done": "Transaction Completion"
              },
              "tip": {
                  "noTip": "No limit",
                  "needUp": "Upgrade unlock limit",
                  "max": "unlimited"
              },
              "title1": "My Grade",
              "title2": "Trade Fair",
              "label": {
                  "levelLabel": "Membership  grade",
                  "descLabel": "Buyable limit",
                  "upLevelLabel": "upgrade",
                  "upLevelLabel2": "buy",
                  "balanceLabel": "Account balance",
                  "label1": "estimate",
                  "labe2": "buy",
                  "label3": "receive",
                  "label4": "number",
                  "label5": "Sell"
              }
          },
          "introduce": {
              "title": "The Inscription Agreement (LPG) only rises and does not fall, starting a new chapter of decentralized finance",
              "content": {
                  "subStr": "The Inscription Agreement was led by Singapore Prosperity Capital and initiated by Malaysia's Dingli Capital; Building a completely decentralized financial and commercial ecosystem based on the Polygon (Matic) public chain ecosystem, and creating an inscription exchange and metaverse platform; To build a massive user system, the platform pioneered the only rise and no fall economic model to create more mainstream assets (Matic) for users in the upcoming bull market, allowing participants to realize their own value.",
                  "title1": "Project Initiation",
                  "title2": "Unilateral Upward Unique Model",
                  "subTitle1": "Project Origin:",
                  "subTitle2": "Project initiation in December 2022",
                  "subTitle3": "In February 2023, we developed technology and obtained a financing of $10 million.",
                  "subTitle4": "The Malaysian community was established in August 2023.",
                  "subTitle5": "September 2023 Inscription Exchange Development",
                  "subTitle6": "Determine the unique drainage mechanism and develop the system in October 2023. The preliminary development of the system will be completed in January 2024 and enter the testing phase.",
                  "subTitle7": "1.0 drainage system will be launched in February 2024",
                  "subTitle8": "Inscription Exchange will be launched in the third quarter of 2024",
                  "subTitle9": "The Wbe. 3 live streaming platform will be launched in the first quarter of 2025",
                  "subTitle10": "Inscription Exchange will be launched in the third quarter of 2024",
                  "subTitle11": "1.0 Preliminary Consensus - Q1 2024",
                  "subTitle12": "The Inscription Agreement aims to create the strongest asset doubling in a bull market; using a mechanism to jointly invest and only rise but not fall+a decline in the second two years will disrupt the industry, drive strong industry consensus, and make everyone a banker in their own hands. The mechanism model for the next two years cannot surpass the Inscription Agreement.",
                  "subTitle13": "It is steadily increasing by 3% every day and 48000 times a year. The logic core mechanism of both buying, selling and upgrading is analyzed: LP is forged without foam, LP corresponds to Matic's secret buying and increasing (full allocation ratio) in the pool, casting LP/selling and increasing (full allocation ratio) realization method, LP withdraws, Matic gives users (full amount), Lpg goes into the black hole and is destroyed, so the currency can't be destroyed, so it only goes up and doesn't go down. 2. If you fall down to the full point, you can get 131070 addresses, and the team's income is more than one million!! 3. Purchasing asset packages also increases (full allocation ratio) LP prices rise every day. If you want to buy LP, you need to purchase asset packages! V1 asset package=50 Uv2 asset package=200 Uv3 asset package=500U Secret note: Matic, which is used for minor promotions and major burn upgrades, will first use 50% automatic purchase of LPG to pull the disk, and then use 50% Magic+purchased LPG to automatically add sushi pool. Direct promotion will receive 20% LP, network computing power weighted dividends will be 20% LP, 16 layer team rewards will be 32% LP, nodes will be 6% LP, operations will be 2% LP, and technology will be 2% LP; Upgrading to occupy a static position can earn 2% of the 16 floors and more than 130000 people can upgrade, resulting in a total of one million U worth of LP that can be directly monetized. Note: All bonus LP rewards and purchased LPs are Matic corresponding to the pool, without foam, and with full positive wave ratio.",

                  "subTitle71": "1.No central fund pool (subverting traditional models).",
                  "subTitle72": "The Legend Agreement (LPG) smart contract is deployed on the Polygon (Matic) chain, with LP pool assets scattered throughout all user wallets, and assets entrusted to users for safekeeping. Only the user can operate redemption; Fundamentally solve the problem of people committing evil and hacking attacks.",
                  "subTitle73": "2.High safety factor (users are in charge of their own assets)",
                  "subTitle74": "User owned LP (Matic) ➕ LPG, all launches are in the pool, No one holds LPG, no selling and no foam; LP allocation is in the user's own wallet, completely under the user's control, and there is no risk of being taken by others.",
                  "subTitle75": "3.Infinite deflation of currency (disruptive innovation)",
                  "subTitle76": "The circulation of LPG is 1 billion pieces, all of which are added to the bottom pool when launched. When users withdraw LP assets, Matic returns to the wallet and LPG is automatically destroyed, leading to unlimited deflation.",
                  "subTitle77": "4.Only rising but not falling (asset appreciation)",
                  "subTitle78": "The Inscription Agreement adopts a unique innovative mechanism for users to hold LP, and when users withdraw LP, the bottom pool will withdraw in equal proportion without affecting the price; When users upgrade and purchase, the coin price increases.",
                  "subTitle79": "5.Advantages of Network Building",
                  "subTitle80": "Adopting a team structure of Er Er sliding, the team can quickly grow. When the team leader is promoting, lower level users can enjoy sliding rewards, which can stimulate the enthusiasm of static users, quickly grow the team, and achieve upper and lower support.",
                  "subTitle81": "6.Complete decentralization",
                  "subTitle82": "All code is open source, all permissions are abandoned, community autonomy is not controlled by any vendor, and it runs automatically on the chain. Smart contracts only distribute and do not store any assets, truly achieving fairness, openness, and transparency.",
                  "subTitle83": "7.Upgrade users by 5 times and get eliminated",
                  "subTitle84": "All upgraded users receive 5 times the upgrade amount and are automatically eliminated. They need to re invest in order to enjoy the benefits of the network. With the addition of internal circulation, users have more motivation to continue sharing.",

                  "w1": "Gameplay Introduction",
                  "w2": "1. Membership level:",
                  "w3": "V1 member: 50U upgrade (unable to purchase LP)",
                  "w4": "V2 membership: 200U upgrade (maximum purchase of 400U LP)",
                  "w5": "V3 membership: 500U upgrade (unlimited purchase of LP)",
                  "w6": "2. Both upgrade rewards and team rewards have burns, for example: if a user is recommended at V1 level and upgraded to V2 level, the recommender will not receive the reward.",
                  "w7": "3. The team structure adopts a 16 story sliding structure, with upper support and lower support, and the maximum sliding capacity of the team is 131070 people.",
                  "w8": "4. Only when upgrading, users receive 100% computing power and enjoy daily network wide computing power dividends until they are 5 times eliminated and re invested.",
              }
          },
          "bottom": {
              "title1": "home",
              "title2": "computing power",
              "title3": "transaction",
              "title22": "introduce"
          }
      }
  }
};

i18n.use(LanguageDetector) //嗅探当前浏览器语言 
.use(initReactI18next) 
  .init({
    resources,
    fallbackLng: "zh-HK",
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      caches: ['localStorage', 'sessionStorage', 'cookie'],
    }
  })

export default i18n