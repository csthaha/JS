// 移位 运算（右移）
// 二进制 0000 1011
// console.log(11 >> 1);
// // 1011 >> 1   -- 101
// console.log(11 << 1);
//利用位移运算，/2 或者 *2 的效果

// N piles of bananas  每挂香蕉上的香蕉数量不一样
// [3,6,7,11],H 小时内吃完 一小时吃几根香蕉
// 一小时内吃 mid 根香蕉，一次只能吃一挂 ，一小时最小吃几根，可以在 H 小时内吃完

/**
 * @description 最少吃香蕉的速度，在规定时间内吃完
 * @param {number[]} piles 
 * @param {number} H 
 * @return {number}
 */
function minEatingSpeed(piles, H) {
    let lo = 1;
    hi = Math.max(...piles);
    //二分查找
    while (lo <= hi) {
        //lo++;
        let mid = lo + ((hi - lo) >> 1);
        if (canEatAllBananas(piles, H, mid)) {
            hi = mid -1;
        } else {
            //没有吃完，怎么吃完？
            // 小的值没有意义了
            lo = mid+1;
        }
    }
    return lo;
}
/**
 * @description 判断能否吃完香蕉
 * @param {number[]} piles 
 * @param {number} H 
 * @param {number} mid 
 * @return {boolean}
 */
function canEatAllBananas(piles, H, mid) {
    let h = 0;
    // mid, 余下吃完
    for (let pile of piles) {
        h += Math.ceil(pile / mid)
    }
    return (h <= H);
}

let piles = [3, 6, 7, 11];
console.log(minEatingSpeed(piles, 8))

// - 吃完香蕉目标？
    // H 小时内吃完 ，
// - 最小的一个数