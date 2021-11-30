import React from 'react';
import Icon1 from '../../Images/svg1.svg';
import Icon2 from '../../Images/svg2.svg';
import Icon3 from '../../Images/svg4.svg'

import { 
    ServicesP,
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
} from './ServiceElements';


function Services() {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Reduce expenses</ServicesH2>
                        <ServicesP>We help reduce your fees and increase your
                            overall revenue.
                        </ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP> You can access our platform online
                            anywhere in the world
                        </ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Preminum Benifits</ServicesH2>
                        <ServicesP> Unlock our special membership card that
                            return 5% cash back.
                        </ServicesP>
                    </ServicesCard>

                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
