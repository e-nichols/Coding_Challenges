export class State {
  private isFinal_: boolean;
  private availableMoves_: Map<string, State>;

  constructor(params: {isFinal: boolean}){
    this.isFinal_ = isFinal;
  }

  getIsFinal(){
    return this.isFinal_;
  }

  getAvailableMoves(){
    return this.availableMoves_;
  }

  addMove(params: {character: string, state: State}) {
    this.availableMoves_.set(character, state);
  }

  prettyPrint(){
    throw new Error('unimplemented')
  }
}
