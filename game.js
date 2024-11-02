class TreasureMap {
    static getInitialClue() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("在古老的图书馆里找到了第一个线索...");
        }, 1000);
      });
    }
  
    static decodeAncientScript(clue) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!clue) {
            reject("没有线索可以解码!");
          }
          resolve("解码成功!宝藏在一座古老的神庙中...");
        }, 1500);
      });
    }
  
    static searchTemple(location) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const random = Math.random();
          if (random < 0.5) {
            reject("糟糕!遇到了神庙守卫!");
          }
          resolve("找到了一个神秘的箱子...");
        }, 2000);
      });
    }
  
    static openTreasureBox() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("恭喜!你找到了传说中的宝藏!");
        }, 1000);
      });
    }
}

// 新增的异步函数
async function findKey(location) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("找到了古老的钥匙...");
    }, 1000);
  });
}

async function solvePuzzle(location) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("成功解决了神庙的谜题...");
    }, 1500);
  });
}

async function avoidTraps(location) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("成功避开了所有陷阱...");
    }, 1000);
  });
}

async function talkToGuardian(location) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("守护者允许你进入神庙...");
    }, 1000);
  });
}

// 使用async/await重写的寻宝过程
async function findTreasureWithAsyncAwait() {
  try {
    const clue = await TreasureMap.getInitialClue();
    console.log(clue);
    const decodedLocation = await TreasureMap.decodeAncientScript(clue);
    console.log(decodedLocation);
    const templeInfo = await TreasureMap.searchTemple(decodedLocation);
    console.log(templeInfo);
    const key = await findKey(templeInfo); // 寻找密钥
    console.log(key);
    const puzzleSolution = await solvePuzzle(templeInfo); // 解决谜题
    console.log(puzzleSolution);
    const safePath = await avoidTraps(templeInfo); // 避开陷阱
    console.log(safePath);
    const guardianResponse = await talkToGuardian(templeInfo); // 与守护者对话
    console.log(guardianResponse);
    const treasure = await TreasureMap.openTreasureBox();
    console.log(treasure);
  } catch (error) {
    console.error("任务失败:", error);
  }
}

// 启动寻宝游戏
findTreasureWithAsyncAwait();
