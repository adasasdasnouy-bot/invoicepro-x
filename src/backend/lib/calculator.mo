import Types "../types/calculator";

module {
  public func calcPos(amount : Nat) : Types.PosResult {
    let fee = amount * 2 / 100;
    { fee; total = amount + fee };
  };

  public func calcProfit(cost : Nat, sell : Nat) : Types.ProfitResult {
    { profit = sell - cost };
  };
};
