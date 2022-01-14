import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import ContentWrapper from "@scandipwa/scandipwa/src/component/ContentWrapper";
import ProgressBar from "src/components/progress-bar/progress-bar.component";
import './Checkout.extensions.style.scss'
class Checkout extends SourceCheckout {    
  render() {
    return (
        <main block="Checkout">
        <ProgressBar bgcolor={"black"} completed={100} />
            <ContentWrapper
              wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
              label={ __('Checkout page') }
            >
                { this.renderSummary(true) }
                <div block="Checkout" elem="Step">
                    { this.renderTitle() }
                    { this.renderGuestForm() }
                    { this.renderStep() }
                    { this.renderLoader() }
                </div>
                <div>
                    { this.renderSummary() }
                    { this.renderPromo() }
                    { this.renderCoupon() }
                </div>
            </ContentWrapper>
        </main>
    );
}
}

export default Checkout;
