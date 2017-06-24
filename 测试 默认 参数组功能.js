/*
策略出处: https://www.botvs.com/strategy/40155
策略名称: 测试 默认 参数组功能
策略作者: 小小梦
策略描述:

### 如何使用代码精确调整“回测系统默认设置”

> 在策略的参数测试，不同时间段回测，多个标的物回测等，回测策略时由于参数需要反复调整，而且不能记录，下次回测时又要重新设置。平台为了方便参数调整，新增加功能 -- 使用代码精确调整“回测系统默认设置”。


参数        默认值           描述
--------  ------------  -------------------------
number    9999          数字类型
bool      true          布尔类型
string    Hello World!  字符串类型
comboBox  0             下拉框: combo1|combo2|combo3
*/

/*backtest
start: 2017-03-01        
end: 2017-03-02           
period: 15              
mode: 1                 
*/

/*args
number : 0
bool: false
string: Hello BotVS！
comboBox : 2
*/

function main(){
    while(true){
        LogStatus("测试默认参数！");
        Sleep();
    }
}
