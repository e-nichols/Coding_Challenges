import { Automaton } from './automaton';
import { AutomatonType } from './automatontype';
import { State } from './state';

export class AutomatonBuilder {
  private type_: AutomatonType;
  private expression_: string;
  private states: Array<State>;
  private initialState_: State;

  setType(type: AutomatonType): void {
    this.type_ = type;
  }

  setExpression(expression: string): void {
    this.expression_ = expression;
  }

  getInitialState(){
    return this.initialState_;
  }

  build(): Automaton {
    return new Automaton(this);
  }

  buildInternal(expression: string): void {
    // Initialize initial state.
    this.initialize();

    // Base case - empty string
    if(expression.length === 0){
      processEmptyExpression();
    }

    // TODO(etnichols): handle eating the expression and turning it into states.
  }

  initialize(){
    this.initialState_ = new State({isFinal: false});
  }

  processEmptyExpression(): void {
    const finalState = new State({isFinal: true});
    this.states.push(finalState);
    this.getInitialState().addMove({character: "ε", state: finalState);
  }
}
