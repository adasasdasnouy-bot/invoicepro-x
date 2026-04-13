import Types "../types/calculator";
import CalculatorLib "../lib/calculator";

mixin () {
  public query func calcPos(amount : Nat) : async Types.PosResult {
    CalculatorLib.calcPos(amount);
  };

  public query func calcProfit(cost : Nat, sell : Nat) : async Types.ProfitResult {
    CalculatorLib.calcProfit(cost, sell);
  };
};
