import { dom } from './tiny-react'
import { connect } from './state';

const DummyComponent = props => <div className="dummy">{props.children}</div>
export default connect()(DummyComponent)
