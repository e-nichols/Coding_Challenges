import { Automaton } from './automaton';
export class AutomatonBuilder {
    setType(type) {
        this.type_ = type;
    }
    setExpression(expression) {
        this.expression_ = expression;
    }
    build() {
        return new Automaton(this);
    }
    buildInternal() {
    }
    // TODO(etnichols): handle processing empty expression only.
    processEmptyExpression() {
        throw new Error('Not yet implemented');
    }
}
