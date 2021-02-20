import { AutomatonBuilder } from './automatonbuilder'
import { AutomatonType } from './automatontype';

export class Automaton {
  private type_: AutomatonType;
  private expression_: string;
  private states: Array<State>;
  private initialState_: State;

  constructor(builder: AutomatonBuilder) {
    // TODO(etnichols): Actually use the builder values.
  }

  test(input: string): boolean {
    throw new Error('Not yet implemented')
  }

  prettyPrint(): void {
    throw new Error('Unimplemented')
  }
}
