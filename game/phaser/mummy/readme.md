预加载是完成游戏之前的感受
资源分为两种
精灵图片独立

游戏第一步 先让角色动起来
game 对象，背景，精灵，动画，phaser 给了友好的API，逻辑。
preload 预加载
create 创建游戏场景
update 动起来

var game = new Phaser.Game(width,height,Phaser.AUTO,'#game',{preload:preload,create:create,update:update})
new Phaser.Game 的各参数：游戏的宽度，游戏的高度，游戏的引擎，游戏的容器id，游戏的各种状态：背景....