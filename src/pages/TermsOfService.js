import { useState, useRef, useEffect } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function TermsOfService(props) {

    return (
        <div>
            <Navbar />
            {props.displayType === "mobile" && (
                <div className="min-h-screen pt-20 flex justify-center font-poppins">
                    <div className="mt-12 w-full px-[18px]">
                        <h1 className="text-3xl font-semibold text-white mb-8">Terms of Service</h1>
                        <div className="bg-white w-full text-black p-8 mb-32 text-sm">
                            <h1 className="font-[500] mb-4">Introduction</h1>
                            <p className="mb-8">
                                Welcome to Phynite, also known as Phynite LLC. Throughout the course of terms of service, you may be addressed as “client, ’“you,” or “your.” However, Phynite may be addressed as “us,” “we,” or “our.” The client will be required to follow, abide by, and meet the terms listed below in order to gain access to any of Phynite’s software, tools, features, interactions, and/or functionalities. This terms of service document serves as an agreement between Phynite and the Client.
                            </p>
                            <ol>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">1. Accessing Our Services</h1>
                                    <h2 className="font-[500] mb-4 pl-8">a. Age Requirement</h2>
                                    <p className="mb-4 pl-8">
                                        The client must be 18 years old or older and abide by the age of majority enforced by local jurisdiction in order to use any of Phynite’s services. Any form of lying, concealing, replacing, or replicating untruthful ages will be investigated.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">b. Local Jurisdiction and Laws</h2>
                                    <p className="mb-4 pl-8">
                                        You agree to follow and uphold local, state, federal, and/or all applicable laws when accessing our services. To use our Service, you need to confirm that you are not located in or bound by a U.S. embargoed area, not subject to any government sanctions, not owned or controlled by someone who is sanctioned or located in an embargoed area, and none of your representatives are sanctioned or located in an embargoed area. It's your responsibility to comply with all applicable laws outside the U.S. and we appreciate your cooperation.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">c. Creating a Phynite Account</h2>
                                    <p className="mb-4 pl-8">
                                        The client will be required to create a “Phynite Account,” an account registered with Phynite, in order to use any of Phynite’s software and services. Moreover, on the completion of creating a “Phynite Account,” the client agrees not to represent or replicate another identity or third party. Phynite is not responsible for any actions or activities that occur on your account. You are responsible for all of the actions or activities that occur on your account. When completing a new account with us, or already hold an account with us, we hold the right to limit, suspend, and refuse access to your “Phynite Account.” This right will only be used when the client is under investigation for imposing rules and regulations of this terms of service and/or local, state, or federal laws.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">d. Access</h2>
                                    <p className="mb-4 pl-8">
                                        Phynite is a web3 platform, which will require the client to hold a blockchain address and a third-party crypto wallet in order to interact with the platform. This is due to the fact that the blockchain address serves as your identity. The account that the client creates (“Phynite Account”) will be tied to his/her blockchain address, very similar to a username and password. By connecting your wallet with your account (“Phynite Account”), you agree follow the terms of service and conditions of your wallet provider while using their services. The wallets that are available on the platform for the client to use are not managed or owned by Phynite. This means that the client agrees and understands that Phynite does not have any control or responsibility over the wallet. The client is responsible for their own wallet, including, but not limited to the activity, security, and transactions that occur. Moreover, additional information, such as name, address, telephone number, and email address, may be asked to due delivery information, legally binding contracts, and communication methods.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">e. Phynite Email Communication to Client</h2>
                                    <p className="mb-4 pl-8">
                                        The Client agrees and understands that the main source of communication from Phynite to the Client will be mainly through email. Any other forms of communication will be provided by Phynite’s email communications which will be sent directly to the client. Any repercussions that arise from involvement scams or fraudulent activities will be held by the Client. Additionally, to avoid miscommunication and fraudulent activities, the Client understands that the email associated with the “Phynite Account” or provided is up to date.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">f. Changes Made to the Terms of Service</h2>
                                    <p className="mb-4 pl-8">
                                        Due to the upscale potential of Phynite, we hold the right to make amendments to the Terms of Service at any time. However, Phynite will not make these changes with the purpose to lie, deceive, or any malicious intent. We will do our due diligence of informing the client about these changes through our main communication method. When you begin to use our services, you agree and understand that Phynite holds the right to make these amendments. Additionally, it is the Client’s responsibility to stay up to date with the terms listed in this document.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">2. Phynite Ownership</h1>
                                    <p className="mb-4 pl-4">
                                        All aspects of Phynite’s platform design(texts, logos, and icons), features, business method (Phynite Protocol), data, smart contracts, and materials are the proprietary properties of Phynite. The client understands that any replication, reproduction, or derivatives of Phynite’s proprietary property will violate our ownership rights. In order to replicate, reproduce, or use any aspects of Phynite, you will need access directly through Phynite LLC. All other third-party content, trademarks, graphics, designs, and proprietary property are owned by their respective owners. Additionally, any third-party content, trademarks, graphics, and designs associated with a CBNFT are the property of their respective owners. This means that the client must abide by, not only Phynite’s, but the third-party’s terms of service and conditions as well. The CBNFTs listed on the “Explore Page” are digital tokens that represent the owner’s right to ownership of the physical item that it is contractually bound to. Unless specifically mentioned, the CBNFTs were not produced in partnership with third-parties, and they were not involved in the production of this digital asset. The images/videos in the CBNFT’s metadata are images of the physical asset taken by Phynite, with the purpose to display the physical assets’ conditions.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">3. Assets on Phynite</h1>
                                    <h2 className="font-[500] mb-4 pl-8">a. Physically Backed Digital Assets and CBNFTs</h2>
                                    <p className="mb-4 pl-8">
                                        When interacting and accessing Phynite’s platform, you will be able to use cryptographic protocols (“Phynite Protocol”), Ethereum(cryptocurrency network), and smart contracts. Additionally, you will also have access to buy, sell, or hold the digital representations of physical assets through the platform. The digital representation of the physical asset is called a “Physically Backed Digital Asset.” The only digital representations of physical assets that are able to be stored, supported, or transmitted through our services will be referred to as a “Valid Token” throughout the course of the Terms of Service, whereas the unverified Tokens will be referred to as an (“Invalid Token”). Phynite will not allow Invalid Tokens to be used or supported on the platform. If it is the case that an Invalid Token is being used on the platform, Phynite reserves the right to remove it immediately. Do not use your third-party wallet with the purpose to hold, send, receive, or transact Invalid Tokens. You further understand that the Valid Token will be transmitted to your crypto wallet that is linked to your Phynite Account. Phynite has no responsibility attempting to recover, track down, or recover lost Tokens due to wallet mishaps. Furthermore, third-party protocols, digital assets, and features that are not communicated directly by Phynite will be inaccessible on our platform. Repercussions from being induced to use unrelated Phynite activities, protocols, digital assets, and features will be held responsible by the Client. You also agree to not transact, buy, sell, or hold Invalid Token.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">b. CBNFTs</h2>
                                    <p className="mb-4 pl-8">
                                        When you interact with the Phynite platform, you will be able to trade Valid Tokens that represent the ownership of the physical asset or collectible through our intellectual property CBNFT (also known as Contractually Bound Non-Fungible Token).CBNFTs are NFTs (Non-Fungible Tokens) that can determine the legal obligations of entities through the changes of its state. Each CBNFT contains a unique digital identifier that cannot be reproduced, replicated, subdivided, or copied which is recorded in the blockchain with the purpose to guarantee authenticity and ownership. When you are using Phynite’s services, you will interact with computer programs that are stored on a blockchain which are only activities when specific conditions are met(“Smart Contract”.) Smart contracts are commonly used to automatically carry out an agreement, which helps everyone involved know the outcome right away, without needing a middleman or wasting time. The Smart Contract backed by Phynite is called the “ERC-721.” ERC-721 smart contracts are the standard for representing the ownership of non-fungible tokens, and they can be modified for different purposes, such as storing the digital signatures of legally binding contracts. Following the rules and regulations highlighted in the ERC-721 smart contract, you may sell, buy, or take possession of the CBNFT by interacting with the Ethereum Blockchain (through an Off-Chain interaction).
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">c. Ownership Rights and Control of Physical Asset</h2>
                                    <p className="mb-4 pl-8">
                                        The physical assets are not the property of Phynite LLC. The ownership rights remain with the seller, until the buyer purchases the CBNFT. During the process of delivering physical assets, your items may be insured up to five-thousand dollars in the case of a rare incident. The client agrees and understands that the rate of insurance during the delivery of physical assets may vary and is subject to change. Once in the possession of Phynite, your asset will be transferred to anonymous vault locations. Your physical asset will be insured up to one-hundred percent, during the time it is secured at our private vaults. The client agrees and understands that the storage fee is waived temporarily and it may be subject to change.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">4. Transactions on Phynite</h1>
                                    <h2 className="font-[500] mb-4 pl-8">a. Buy, Sell, Burn, and Transfer</h2>
                                    <p className="mb-4 pl-8">
                                        Having access on Phynite’s platform to make transactions means you will be able to do the following:
                                    </p>
                                    <h3 className="mb-4 pl-16">i. Buying</h3>
                                    <p className="mb-4 pl-16">
                                        If you have sufficient balance on your third-party wallet, you will be able to purchase a CBNFT(Buy). The client understands and agrees that one can officially buy a CBNFT by executing a buy order, or by bidding or offering a price for a CBNFT and getting that bid or offer accepted by the seller of the said CBNFT.
                                    </p>
                                    <h3 className="mb-4 pl-16">ii. Selling</h3>
                                    <p className="mb-4 pl-16">
                                        After the execution of a sale (“Selling”), fees that are associated with the Selling process will be deducted from your proceeds. These proceeds will then be deposited to your crypto wallet, associated with your Phynite Account. The client agrees and understands that only the rightful owner of the Ethereum wallet that holds the CBNFT may create sell or auction orders, and when a buyer executes a buying transaction or the seller accepts a bid or offer, the item has officially been sold.
                                    </p>
                                    <h3 className="mb-4 pl-16">iii. Burn</h3>
                                    <p className="mb-4 pl-16">
                                        After having your physical asset listed on the Phynite platform as a CBNFT, you have the right to redeem your physical asset back(through a function called “Burning” or “Burn”). The client agrees and understands when the Burn feature has been activated by the rightful owner, Phynite has the legal obligation to return your physical asset to the address you have provided.
                                    </p>
                                    <h3 className="mb-4 pl-16">iv. Fees</h3>
                                    <p className="mb-4 pl-16">
                                        Lastly, you (or the holder of a CBNFT) have the right to transfer the ownership of a CBNFT to another crypto wallet through the function called “Transfer”. The client understands that only the rightful owner of the crypto wallet and, simultaneously, the CBNFT owner has access to use the Transfer function.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">b. Fees</h2>
                                    <p className="mb-4 pl-8">
                                        The client understands and agrees that Phynite holds the right to charge fees that are in relation to transacting CBNFTs (“Trading Fees”). These Trading Fees will be highlighted and made known to you before proceeding with a transaction. The further breakdown of the Trading Fees can be found in the “Fees Page.” By interacting, transacting, and using our platform services, you understand and agree that you are responsible for paying the required fees. Additionally, you agree and understand that the rate of fees is subject to change. However, Phynite will do its full diligence to make these changes known to the user. Moreover, you may be charged fees that are in relation to network requirements when transacting Valid Tokens. You understand and agree that the network related fees are not controlled by Phynite, instead it depends on the condition of the network being used. Phynite is not responsible for wallet related fees or charges.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">c. Transaction Status</h2>
                                    <p className="mb-4 pl-8">
                                        You agree and understand that any transactions that were completed using your credentials will be assumed valid, unless otherwise notified by the client. If you believe that you are in a case related to these matters please contact hello@phynite.io.  Phynite does not have any control or responsibility over the client’s wallet. The client is responsible for their own wallet, including, but not limited to the activity, security, and transactions that occur.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">5. User Conduct</h1>
                                    <p className="mb-4 pl-4">
                                        Phynite strives to provide its users with the best community and environment to explore the web3 interface. In order to keep the standards at the highest level of expectations, Phynite holds the right to take action by limiting, refusing, suspending, or revoking your Phynite Account, removing your access to view, sell, buy, or transfer CBNFTs, and limiting user interaction on Phynite services. Furthermore, we hold the right to take action in sole discretion if you have violated any of the rules and regulations set forth by the terms of service and/or local, state, or federal laws.
                                    </p>
                                    <p className="mb-4 pl-4">
                                        The Client agrees and understands to not violate any terms of service, laws, and regulations set forth by Phynite, local, state, and federal government, and third-party applications while interacting with our services. The client further agrees to the terms listed below:
                                    </p>
                                    <ul className="mb-4 pl-12">
                                        <li className="mb-4 list-disc">
                                            You agree to follow and uphold local, state, federal, and/or all applicable laws when accessing our services.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree not to represent or replicate another identity or third party while using any of Phynite’s services.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to not use another user’s Phynite Account without consent or authorization from the account holder.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to follow the terms of service and conditions of all third-party applications and wallet providers while using their services.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You also agree to not transact, buy, sell, or hold Invalid Token.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree not to attempt to access Phynite’s services using a different blockchain address if your previous account has been suspended, revoked, or banned in any way, shape, or form.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to use Phynite’s platform for its intended use and not with the purpose to hack, dismantle, or damage the software and/or APIs being used by Phynite.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to use Phynite’s platform for its intended use and not with the purpose to deceive, scam, or enact fraudulent behaviors that may affect other users.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to not attempt dismantling, replicating, or creating a derivative of Phynite’s platform with the purpose to avoid Phynite’s fee system or commercial uses.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to use Phynite’s platform for its intended use and not with the purpose of money laundering or gambling and any financial crimes that may oppose local, state, or federal laws and Phynite’s terms of service.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to not make transactions on Phynite’s platform on the behalf of someone who is located in or bound by a U.S. embargoed area, subject to any government sanctions, owned or controlled by someone who is sanctioned or located in an embargoed area, and representatives are sanctioned or located in an embargoed area.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree not to use any of Phynite’s services, software, or CBNFTs to initiate, transact, or complete financial activities that involve(but not limited to) securities, commodities, options, or debt instruments that are subject to licensing and/or registering.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to not use illegally obtained physical assets to list on the Phynite platform with the intent to sell, buy, or transfer.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to not display any means of racism, sexism, child exploitation, self-harm, hate, violence, or any illegal content when using and interacting with Phynite.
                                        </li>
                                    </ul>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">6. Disclaimers (Limitation of liability)</h1>
                                    <p className="mb-4 pl-4">
                                        The Client understands and agrees that:
                                    </p>
                                    <p className="mb-4 pl-12">
                                        Your decision to use Phynite's service is solely at your own risk. You acknowledge that the service is provided "as is" and "as available." Phynite and its affiliates do not provide any express or implied warranties or conditions regarding the service's appropriateness for your specific needs, accuracy, availability, reliability, legality, or safety. Phynite disclaims all other warranties or conditions, including implied warranties or conditions of merchantability, fitness for a particular purpose, title, and non-infringement. Any losses incurred(not limited to profits) as a result of your use of the service or reliance on information found on the service will not be the responsibility of Phynite. Phynite makes every effort to ensure that the service is secure, but it cannot guarantee that the service, its contents, or any CBNFTs associated with it are free of viruses or other dangerous components. You acknowledge that the security of any data you provide online cannot be guaranteed, and Phynite will not be held liable for any security breaches. Phynite will not be held responsible for any losses incurred by you, including losses resulting from user error, inaccurate transactions, mistyped or misspelled addresses, data loss or infringement, unrecognizable third-party or unauthorized activity and use (which may include viruses, scams, or any other means of attacking the service or CBNFTs).
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">7. Assumption of Risk</h1>
                                    <p className="mb-4 pl-4">
                                        The Client understands and agrees that:
                                    </p>
                                    <ul className="mb-4 pl-12">
                                        <li className="mb-4 list-disc">
                                            Phynite does not own, moderate, or manage the public blockchain that is being used to make transactions on the platform. The value of the currency is subject to volatility and fluctuations in which Phynite has no control over. Due to these conditions, new rules and regulations that are implemented in the blockchain(in relation to cryptocurrency and non-fungible tokens) may negatively impact the value, service, and development of such things.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            We operate using third-party applications and vendors which are not under the direct control, management, and moderation of Phynite. Due to these circumstances, if Phynite’s relationship with these third-party applications/vendors discontinues, our services will suffer due to the absence of such functions.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            Phynite holds the right to limit, refuse, suspend, or revoke your Phynite Account, remove your access to view, sell, buy, or transfer CBNFTs, and limit user interaction on Phynite services when a claim has been made against Phynite.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            Phynite reserves the right to be released from claims, demands, and damages in relation to known and unknown natures. When you open a Phynite Account, you agree to waive any statutory protections (including claims you may have been aware of at the time of signing this agreement).
                                        </li>
                                    </ul>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">8. Dispute Resolution</h1>
                                    <p className="mb-4 pl-4">
                                        If and only if, there are any disputes, claims, or controversies that arise from the use of Phynite’s services or breaches that have been made regarding this terms of service document, it shall be resolved through a binding arbitration. Before initiating an arbitration, you must begin the dispute by sending a letter that describes the accurate nature of the claim and desired resolution to 24445 Hawthorne Blvd. Torrance, CA 90505. Both the client and Phynite agree to waive any constitutional and statutory rights to not only sue in court, but have a trial in the presence of a judge or a jury. However, Phynite and the Client agree to meet(through a video conference, phone call, or personally) to discuss the dispute and desired resolution before moving forward with an arbitration. In the case that Phynite or the Client is represented by a counsel, it is important to note that each party must have one representative(the Client who filed the claim or Phynite representative) in full attendance. If a resolution is not reached within the time period of thirty days after the initiation of the dispute, both parties hold the right to commence an arbitration, small claims court action, or file a claim for injunctive or equitable relief.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">9. Modifications to the service</h1>
                                    <p className="mb-4 pl-4">
                                        Phynite holds the right to temporarily suspend or inactivate the services due to platform modification and updates. Moreover, in total discretion, Phynite holds the right to permanently disable the services without liability as a result.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">10. Privacy Policy</h1>
                                    <p className="mb-4 pl-4">
                                        To grasp a deeper understanding of how Phynite collects, utilizes, and shares information about the Clients, please read our Privacy Policy. By creating a Phynite Account, you agree to the terms listed in the Privacy Policy, including the collection and utilization of your personal information.
                                    </p>
                                </li>
                            </ol>

                        </div>
                    </div>
                </div>
            )}
            {props.displayType === "tablet" && (
                <div className="min-h-screen pt-20 flex justify-center font-poppins">
                    <div className="mt-20 w-full px-[18px]">
                        <h1 className="text-5xl font-semibold text-white mb-12">Terms of Service</h1>
                        <div className="bg-white w-full text-black p-16 mb-32">
                            <h1 className="font-[500] mb-4">Introduction</h1>
                            <p className="mb-8">
                                Welcome to Phynite, also known as Phynite LLC. Throughout the course of terms of service, you may be addressed as “client, ’“you,” or “your.” However, Phynite may be addressed as “us,” “we,” or “our.” The client will be required to follow, abide by, and meet the terms listed below in order to gain access to any of Phynite’s software, tools, features, interactions, and/or functionalities. This terms of service document serves as an agreement between Phynite and the Client.
                            </p>
                            <ol>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">1. Accessing Our Services</h1>
                                    <h2 className="font-[500] mb-4 pl-8">a. Age Requirement</h2>
                                    <p className="mb-4 pl-8">
                                        The client must be 18 years old or older and abide by the age of majority enforced by local jurisdiction in order to use any of Phynite’s services. Any form of lying, concealing, replacing, or replicating untruthful ages will be investigated.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">b. Local Jurisdiction and Laws</h2>
                                    <p className="mb-4 pl-8">
                                        You agree to follow and uphold local, state, federal, and/or all applicable laws when accessing our services. To use our Service, you need to confirm that you are not located in or bound by a U.S. embargoed area, not subject to any government sanctions, not owned or controlled by someone who is sanctioned or located in an embargoed area, and none of your representatives are sanctioned or located in an embargoed area. It's your responsibility to comply with all applicable laws outside the U.S. and we appreciate your cooperation.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">c. Creating a Phynite Account</h2>
                                    <p className="mb-4 pl-8">
                                        The client will be required to create a “Phynite Account,” an account registered with Phynite, in order to use any of Phynite’s software and services. Moreover, on the completion of creating a “Phynite Account,” the client agrees not to represent or replicate another identity or third party. Phynite is not responsible for any actions or activities that occur on your account. You are responsible for all of the actions or activities that occur on your account. When completing a new account with us, or already hold an account with us, we hold the right to limit, suspend, and refuse access to your “Phynite Account.” This right will only be used when the client is under investigation for imposing rules and regulations of this terms of service and/or local, state, or federal laws.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">d. Access</h2>
                                    <p className="mb-4 pl-8">
                                        Phynite is a web3 platform, which will require the client to hold a blockchain address and a third-party crypto wallet in order to interact with the platform. This is due to the fact that the blockchain address serves as your identity. The account that the client creates (“Phynite Account”) will be tied to his/her blockchain address, very similar to a username and password. By connecting your wallet with your account (“Phynite Account”), you agree follow the terms of service and conditions of your wallet provider while using their services. The wallets that are available on the platform for the client to use are not managed or owned by Phynite. This means that the client agrees and understands that Phynite does not have any control or responsibility over the wallet. The client is responsible for their own wallet, including, but not limited to the activity, security, and transactions that occur. Moreover, additional information, such as name, address, telephone number, and email address, may be asked to due delivery information, legally binding contracts, and communication methods.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">e. Phynite Email Communication to Client</h2>
                                    <p className="mb-4 pl-8">
                                        The Client agrees and understands that the main source of communication from Phynite to the Client will be mainly through email. Any other forms of communication will be provided by Phynite’s email communications which will be sent directly to the client. Any repercussions that arise from involvement scams or fraudulent activities will be held by the Client. Additionally, to avoid miscommunication and fraudulent activities, the Client understands that the email associated with the “Phynite Account” or provided is up to date.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">f. Changes Made to the Terms of Service</h2>
                                    <p className="mb-4 pl-8">
                                        Due to the upscale potential of Phynite, we hold the right to make amendments to the Terms of Service at any time. However, Phynite will not make these changes with the purpose to lie, deceive, or any malicious intent. We will do our due diligence of informing the client about these changes through our main communication method. When you begin to use our services, you agree and understand that Phynite holds the right to make these amendments. Additionally, it is the Client’s responsibility to stay up to date with the terms listed in this document.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">2. Phynite Ownership</h1>
                                    <p className="mb-4 pl-4">
                                        All aspects of Phynite’s platform design(texts, logos, and icons), features, business method (Phynite Protocol), data, smart contracts, and materials are the proprietary properties of Phynite. The client understands that any replication, reproduction, or derivatives of Phynite’s proprietary property will violate our ownership rights. In order to replicate, reproduce, or use any aspects of Phynite, you will need access directly through Phynite LLC. All other third-party content, trademarks, graphics, designs, and proprietary property are owned by their respective owners. Additionally, any third-party content, trademarks, graphics, and designs associated with a CBNFT are the property of their respective owners. This means that the client must abide by, not only Phynite’s, but the third-party’s terms of service and conditions as well. The CBNFTs listed on the “Explore Page” are digital tokens that represent the owner’s right to ownership of the physical item that it is contractually bound to. Unless specifically mentioned, the CBNFTs were not produced in partnership with third-parties, and they were not involved in the production of this digital asset. The images/videos in the CBNFT’s metadata are images of the physical asset taken by Phynite, with the purpose to display the physical assets’ conditions.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">3. Assets on Phynite</h1>
                                    <h2 className="font-[500] mb-4 pl-8">a. Physically Backed Digital Assets and CBNFTs</h2>
                                    <p className="mb-4 pl-8">
                                        When interacting and accessing Phynite’s platform, you will be able to use cryptographic protocols (“Phynite Protocol”), Ethereum(cryptocurrency network), and smart contracts. Additionally, you will also have access to buy, sell, or hold the digital representations of physical assets through the platform. The digital representation of the physical asset is called a “Physically Backed Digital Asset.” The only digital representations of physical assets that are able to be stored, supported, or transmitted through our services will be referred to as a “Valid Token” throughout the course of the Terms of Service, whereas the unverified Tokens will be referred to as an (“Invalid Token”). Phynite will not allow Invalid Tokens to be used or supported on the platform. If it is the case that an Invalid Token is being used on the platform, Phynite reserves the right to remove it immediately. Do not use your third-party wallet with the purpose to hold, send, receive, or transact Invalid Tokens. You further understand that the Valid Token will be transmitted to your crypto wallet that is linked to your Phynite Account. Phynite has no responsibility attempting to recover, track down, or recover lost Tokens due to wallet mishaps. Furthermore, third-party protocols, digital assets, and features that are not communicated directly by Phynite will be inaccessible on our platform. Repercussions from being induced to use unrelated Phynite activities, protocols, digital assets, and features will be held responsible by the Client. You also agree to not transact, buy, sell, or hold Invalid Token.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">b. CBNFTs</h2>
                                    <p className="mb-4 pl-8">
                                        When you interact with the Phynite platform, you will be able to trade Valid Tokens that represent the ownership of the physical asset or collectible through our intellectual property CBNFT (also known as Contractually Bound Non-Fungible Token).CBNFTs are NFTs (Non-Fungible Tokens) that can determine the legal obligations of entities through the changes of its state. Each CBNFT contains a unique digital identifier that cannot be reproduced, replicated, subdivided, or copied which is recorded in the blockchain with the purpose to guarantee authenticity and ownership. When you are using Phynite’s services, you will interact with computer programs that are stored on a blockchain which are only activities when specific conditions are met(“Smart Contract”.) Smart contracts are commonly used to automatically carry out an agreement, which helps everyone involved know the outcome right away, without needing a middleman or wasting time. The Smart Contract backed by Phynite is called the “ERC-721.” ERC-721 smart contracts are the standard for representing the ownership of non-fungible tokens, and they can be modified for different purposes, such as storing the digital signatures of legally binding contracts. Following the rules and regulations highlighted in the ERC-721 smart contract, you may sell, buy, or take possession of the CBNFT by interacting with the Ethereum Blockchain (through an Off-Chain interaction).
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">c. Ownership Rights and Control of Physical Asset</h2>
                                    <p className="mb-4 pl-8">
                                        The physical assets are not the property of Phynite LLC. The ownership rights remain with the seller, until the buyer purchases the CBNFT. During the process of delivering physical assets, your items may be insured up to five-thousand dollars in the case of a rare incident. The client agrees and understands that the rate of insurance during the delivery of physical assets may vary and is subject to change. Once in the possession of Phynite, your asset will be transferred to anonymous vault locations. Your physical asset will be insured up to one-hundred percent, during the time it is secured at our private vaults. The client agrees and understands that the storage fee is waived temporarily and it may be subject to change.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">4. Transactions on Phynite</h1>
                                    <h2 className="font-[500] mb-4 pl-8">a. Buy, Sell, Burn, and Transfer</h2>
                                    <p className="mb-4 pl-8">
                                        Having access on Phynite’s platform to make transactions means you will be able to do the following:
                                    </p>
                                    <h3 className="mb-4 pl-16">i. Buying</h3>
                                    <p className="mb-4 pl-16">
                                        If you have sufficient balance on your third-party wallet, you will be able to purchase a CBNFT(Buy). The client understands and agrees that one can officially buy a CBNFT by executing a buy order, or by bidding or offering a price for a CBNFT and getting that bid or offer accepted by the seller of the said CBNFT.
                                    </p>
                                    <h3 className="mb-4 pl-16">ii. Selling</h3>
                                    <p className="mb-4 pl-16">
                                        After the execution of a sale (“Selling”), fees that are associated with the Selling process will be deducted from your proceeds. These proceeds will then be deposited to your crypto wallet, associated with your Phynite Account. The client agrees and understands that only the rightful owner of the Ethereum wallet that holds the CBNFT may create sell or auction orders, and when a buyer executes a buying transaction or the seller accepts a bid or offer, the item has officially been sold.
                                    </p>
                                    <h3 className="mb-4 pl-16">iii. Burn</h3>
                                    <p className="mb-4 pl-16">
                                        After having your physical asset listed on the Phynite platform as a CBNFT, you have the right to redeem your physical asset back(through a function called “Burning” or “Burn”). The client agrees and understands when the Burn feature has been activated by the rightful owner, Phynite has the legal obligation to return your physical asset to the address you have provided.
                                    </p>
                                    <h3 className="mb-4 pl-16">iv. Fees</h3>
                                    <p className="mb-4 pl-16">
                                        Lastly, you (or the holder of a CBNFT) have the right to transfer the ownership of a CBNFT to another crypto wallet through the function called “Transfer”. The client understands that only the rightful owner of the crypto wallet and, simultaneously, the CBNFT owner has access to use the Transfer function.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">b. Fees</h2>
                                    <p className="mb-4 pl-8">
                                        The client understands and agrees that Phynite holds the right to charge fees that are in relation to transacting CBNFTs (“Trading Fees”). These Trading Fees will be highlighted and made known to you before proceeding with a transaction. The further breakdown of the Trading Fees can be found in the “Fees Page.” By interacting, transacting, and using our platform services, you understand and agree that you are responsible for paying the required fees. Additionally, you agree and understand that the rate of fees is subject to change. However, Phynite will do its full diligence to make these changes known to the user. Moreover, you may be charged fees that are in relation to network requirements when transacting Valid Tokens. You understand and agree that the network related fees are not controlled by Phynite, instead it depends on the condition of the network being used. Phynite is not responsible for wallet related fees or charges.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">c. Transaction Status</h2>
                                    <p className="mb-4 pl-8">
                                        You agree and understand that any transactions that were completed using your credentials will be assumed valid, unless otherwise notified by the client. If you believe that you are in a case related to these matters please contact hello@phynite.io.  Phynite does not have any control or responsibility over the client’s wallet. The client is responsible for their own wallet, including, but not limited to the activity, security, and transactions that occur.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">5. User Conduct</h1>
                                    <p className="mb-4 pl-4">
                                        Phynite strives to provide its users with the best community and environment to explore the web3 interface. In order to keep the standards at the highest level of expectations, Phynite holds the right to take action by limiting, refusing, suspending, or revoking your Phynite Account, removing your access to view, sell, buy, or transfer CBNFTs, and limiting user interaction on Phynite services. Furthermore, we hold the right to take action in sole discretion if you have violated any of the rules and regulations set forth by the terms of service and/or local, state, or federal laws.
                                    </p>
                                    <p className="mb-4 pl-4">
                                        The Client agrees and understands to not violate any terms of service, laws, and regulations set forth by Phynite, local, state, and federal government, and third-party applications while interacting with our services. The client further agrees to the terms listed below:
                                    </p>
                                    <ul className="mb-4 pl-12">
                                        <li className="mb-4 list-disc">
                                            You agree to follow and uphold local, state, federal, and/or all applicable laws when accessing our services.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree not to represent or replicate another identity or third party while using any of Phynite’s services.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to not use another user’s Phynite Account without consent or authorization from the account holder.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to follow the terms of service and conditions of all third-party applications and wallet providers while using their services.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You also agree to not transact, buy, sell, or hold Invalid Token.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree not to attempt to access Phynite’s services using a different blockchain address if your previous account has been suspended, revoked, or banned in any way, shape, or form.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to use Phynite’s platform for its intended use and not with the purpose to hack, dismantle, or damage the software and/or APIs being used by Phynite.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to use Phynite’s platform for its intended use and not with the purpose to deceive, scam, or enact fraudulent behaviors that may affect other users.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to not attempt dismantling, replicating, or creating a derivative of Phynite’s platform with the purpose to avoid Phynite’s fee system or commercial uses.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to use Phynite’s platform for its intended use and not with the purpose of money laundering or gambling and any financial crimes that may oppose local, state, or federal laws and Phynite’s terms of service.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to not make transactions on Phynite’s platform on the behalf of someone who is located in or bound by a U.S. embargoed area, subject to any government sanctions, owned or controlled by someone who is sanctioned or located in an embargoed area, and representatives are sanctioned or located in an embargoed area.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree not to use any of Phynite’s services, software, or CBNFTs to initiate, transact, or complete financial activities that involve(but not limited to) securities, commodities, options, or debt instruments that are subject to licensing and/or registering.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to not use illegally obtained physical assets to list on the Phynite platform with the intent to sell, buy, or transfer.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to not display any means of racism, sexism, child exploitation, self-harm, hate, violence, or any illegal content when using and interacting with Phynite.
                                        </li>
                                    </ul>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">6. Disclaimers (Limitation of liability)</h1>
                                    <p className="mb-4 pl-4">
                                        The Client understands and agrees that:
                                    </p>
                                    <p className="mb-4 pl-12">
                                        Your decision to use Phynite's service is solely at your own risk. You acknowledge that the service is provided "as is" and "as available." Phynite and its affiliates do not provide any express or implied warranties or conditions regarding the service's appropriateness for your specific needs, accuracy, availability, reliability, legality, or safety. Phynite disclaims all other warranties or conditions, including implied warranties or conditions of merchantability, fitness for a particular purpose, title, and non-infringement. Any losses incurred(not limited to profits) as a result of your use of the service or reliance on information found on the service will not be the responsibility of Phynite. Phynite makes every effort to ensure that the service is secure, but it cannot guarantee that the service, its contents, or any CBNFTs associated with it are free of viruses or other dangerous components. You acknowledge that the security of any data you provide online cannot be guaranteed, and Phynite will not be held liable for any security breaches. Phynite will not be held responsible for any losses incurred by you, including losses resulting from user error, inaccurate transactions, mistyped or misspelled addresses, data loss or infringement, unrecognizable third-party or unauthorized activity and use (which may include viruses, scams, or any other means of attacking the service or CBNFTs).
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">7. Assumption of Risk</h1>
                                    <p className="mb-4 pl-4">
                                        The Client understands and agrees that:
                                    </p>
                                    <ul className="mb-4 pl-12">
                                        <li className="mb-4 list-disc">
                                            Phynite does not own, moderate, or manage the public blockchain that is being used to make transactions on the platform. The value of the currency is subject to volatility and fluctuations in which Phynite has no control over. Due to these conditions, new rules and regulations that are implemented in the blockchain(in relation to cryptocurrency and non-fungible tokens) may negatively impact the value, service, and development of such things.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            We operate using third-party applications and vendors which are not under the direct control, management, and moderation of Phynite. Due to these circumstances, if Phynite’s relationship with these third-party applications/vendors discontinues, our services will suffer due to the absence of such functions.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            Phynite holds the right to limit, refuse, suspend, or revoke your Phynite Account, remove your access to view, sell, buy, or transfer CBNFTs, and limit user interaction on Phynite services when a claim has been made against Phynite.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            Phynite reserves the right to be released from claims, demands, and damages in relation to known and unknown natures. When you open a Phynite Account, you agree to waive any statutory protections (including claims you may have been aware of at the time of signing this agreement).
                                        </li>
                                    </ul>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">8. Dispute Resolution</h1>
                                    <p className="mb-4 pl-4">
                                        If and only if, there are any disputes, claims, or controversies that arise from the use of Phynite’s services or breaches that have been made regarding this terms of service document, it shall be resolved through a binding arbitration. Before initiating an arbitration, you must begin the dispute by sending a letter that describes the accurate nature of the claim and desired resolution to 24445 Hawthorne Blvd. Torrance, CA 90505. Both the client and Phynite agree to waive any constitutional and statutory rights to not only sue in court, but have a trial in the presence of a judge or a jury. However, Phynite and the Client agree to meet(through a video conference, phone call, or personally) to discuss the dispute and desired resolution before moving forward with an arbitration. In the case that Phynite or the Client is represented by a counsel, it is important to note that each party must have one representative(the Client who filed the claim or Phynite representative) in full attendance. If a resolution is not reached within the time period of thirty days after the initiation of the dispute, both parties hold the right to commence an arbitration, small claims court action, or file a claim for injunctive or equitable relief.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">9. Modifications to the service</h1>
                                    <p className="mb-4 pl-4">
                                        Phynite holds the right to temporarily suspend or inactivate the services due to platform modification and updates. Moreover, in total discretion, Phynite holds the right to permanently disable the services without liability as a result.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">10. Privacy Policy</h1>
                                    <p className="mb-4 pl-4">
                                        To grasp a deeper understanding of how Phynite collects, utilizes, and shares information about the Clients, please read our Privacy Policy. By creating a Phynite Account, you agree to the terms listed in the Privacy Policy, including the collection and utilization of your personal information.
                                    </p>
                                </li>
                            </ol>

                        </div>
                    </div>
                </div>
            )}
            {props.displayType === "smallComputer" && (
                <div className="min-h-screen pt-20 flex justify-center font-poppins">
                    <div className="mt-20 w-full px-8">
                        <h1 className="text-5xl font-semibold text-white mb-12">Terms of Service</h1>
                        <div className="bg-white w-full text-black p-16 mb-32">
                            <h1 className="font-[500] mb-4">Introduction</h1>
                            <p className="mb-8">
                                Welcome to Phynite, also known as Phynite LLC. Throughout the course of terms of service, you may be addressed as “client, ’“you,” or “your.” However, Phynite may be addressed as “us,” “we,” or “our.” The client will be required to follow, abide by, and meet the terms listed below in order to gain access to any of Phynite’s software, tools, features, interactions, and/or functionalities. This terms of service document serves as an agreement between Phynite and the Client.
                            </p>
                            <ol>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">1. Accessing Our Services</h1>
                                    <h2 className="font-[500] mb-4 pl-8">a. Age Requirement</h2>
                                    <p className="mb-4 pl-8">
                                        The client must be 18 years old or older and abide by the age of majority enforced by local jurisdiction in order to use any of Phynite’s services. Any form of lying, concealing, replacing, or replicating untruthful ages will be investigated.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">b. Local Jurisdiction and Laws</h2>
                                    <p className="mb-4 pl-8">
                                        You agree to follow and uphold local, state, federal, and/or all applicable laws when accessing our services. To use our Service, you need to confirm that you are not located in or bound by a U.S. embargoed area, not subject to any government sanctions, not owned or controlled by someone who is sanctioned or located in an embargoed area, and none of your representatives are sanctioned or located in an embargoed area. It's your responsibility to comply with all applicable laws outside the U.S. and we appreciate your cooperation.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">c. Creating a Phynite Account</h2>
                                    <p className="mb-4 pl-8">
                                        The client will be required to create a “Phynite Account,” an account registered with Phynite, in order to use any of Phynite’s software and services. Moreover, on the completion of creating a “Phynite Account,” the client agrees not to represent or replicate another identity or third party. Phynite is not responsible for any actions or activities that occur on your account. You are responsible for all of the actions or activities that occur on your account. When completing a new account with us, or already hold an account with us, we hold the right to limit, suspend, and refuse access to your “Phynite Account.” This right will only be used when the client is under investigation for imposing rules and regulations of this terms of service and/or local, state, or federal laws.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">d. Access</h2>
                                    <p className="mb-4 pl-8">
                                        Phynite is a web3 platform, which will require the client to hold a blockchain address and a third-party crypto wallet in order to interact with the platform. This is due to the fact that the blockchain address serves as your identity. The account that the client creates (“Phynite Account”) will be tied to his/her blockchain address, very similar to a username and password. By connecting your wallet with your account (“Phynite Account”), you agree follow the terms of service and conditions of your wallet provider while using their services. The wallets that are available on the platform for the client to use are not managed or owned by Phynite. This means that the client agrees and understands that Phynite does not have any control or responsibility over the wallet. The client is responsible for their own wallet, including, but not limited to the activity, security, and transactions that occur. Moreover, additional information, such as name, address, telephone number, and email address, may be asked to due delivery information, legally binding contracts, and communication methods.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">e. Phynite Email Communication to Client</h2>
                                    <p className="mb-4 pl-8">
                                        The Client agrees and understands that the main source of communication from Phynite to the Client will be mainly through email. Any other forms of communication will be provided by Phynite’s email communications which will be sent directly to the client. Any repercussions that arise from involvement scams or fraudulent activities will be held by the Client. Additionally, to avoid miscommunication and fraudulent activities, the Client understands that the email associated with the “Phynite Account” or provided is up to date.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">f. Changes Made to the Terms of Service</h2>
                                    <p className="mb-4 pl-8">
                                        Due to the upscale potential of Phynite, we hold the right to make amendments to the Terms of Service at any time. However, Phynite will not make these changes with the purpose to lie, deceive, or any malicious intent. We will do our due diligence of informing the client about these changes through our main communication method. When you begin to use our services, you agree and understand that Phynite holds the right to make these amendments. Additionally, it is the Client’s responsibility to stay up to date with the terms listed in this document.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">2. Phynite Ownership</h1>
                                    <p className="mb-4 pl-4">
                                        All aspects of Phynite’s platform design(texts, logos, and icons), features, business method (Phynite Protocol), data, smart contracts, and materials are the proprietary properties of Phynite. The client understands that any replication, reproduction, or derivatives of Phynite’s proprietary property will violate our ownership rights. In order to replicate, reproduce, or use any aspects of Phynite, you will need access directly through Phynite LLC. All other third-party content, trademarks, graphics, designs, and proprietary property are owned by their respective owners. Additionally, any third-party content, trademarks, graphics, and designs associated with a CBNFT are the property of their respective owners. This means that the client must abide by, not only Phynite’s, but the third-party’s terms of service and conditions as well. The CBNFTs listed on the “Explore Page” are digital tokens that represent the owner’s right to ownership of the physical item that it is contractually bound to. Unless specifically mentioned, the CBNFTs were not produced in partnership with third-parties, and they were not involved in the production of this digital asset. The images/videos in the CBNFT’s metadata are images of the physical asset taken by Phynite, with the purpose to display the physical assets’ conditions.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">3. Assets on Phynite</h1>
                                    <h2 className="font-[500] mb-4 pl-8">a. Physically Backed Digital Assets and CBNFTs</h2>
                                    <p className="mb-4 pl-8">
                                        When interacting and accessing Phynite’s platform, you will be able to use cryptographic protocols (“Phynite Protocol”), Ethereum(cryptocurrency network), and smart contracts. Additionally, you will also have access to buy, sell, or hold the digital representations of physical assets through the platform. The digital representation of the physical asset is called a “Physically Backed Digital Asset.” The only digital representations of physical assets that are able to be stored, supported, or transmitted through our services will be referred to as a “Valid Token” throughout the course of the Terms of Service, whereas the unverified Tokens will be referred to as an (“Invalid Token”). Phynite will not allow Invalid Tokens to be used or supported on the platform. If it is the case that an Invalid Token is being used on the platform, Phynite reserves the right to remove it immediately. Do not use your third-party wallet with the purpose to hold, send, receive, or transact Invalid Tokens. You further understand that the Valid Token will be transmitted to your crypto wallet that is linked to your Phynite Account. Phynite has no responsibility attempting to recover, track down, or recover lost Tokens due to wallet mishaps. Furthermore, third-party protocols, digital assets, and features that are not communicated directly by Phynite will be inaccessible on our platform. Repercussions from being induced to use unrelated Phynite activities, protocols, digital assets, and features will be held responsible by the Client. You also agree to not transact, buy, sell, or hold Invalid Token.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">b. CBNFTs</h2>
                                    <p className="mb-4 pl-8">
                                        When you interact with the Phynite platform, you will be able to trade Valid Tokens that represent the ownership of the physical asset or collectible through our intellectual property CBNFT (also known as Contractually Bound Non-Fungible Token).CBNFTs are NFTs (Non-Fungible Tokens) that can determine the legal obligations of entities through the changes of its state. Each CBNFT contains a unique digital identifier that cannot be reproduced, replicated, subdivided, or copied which is recorded in the blockchain with the purpose to guarantee authenticity and ownership. When you are using Phynite’s services, you will interact with computer programs that are stored on a blockchain which are only activities when specific conditions are met(“Smart Contract”.) Smart contracts are commonly used to automatically carry out an agreement, which helps everyone involved know the outcome right away, without needing a middleman or wasting time. The Smart Contract backed by Phynite is called the “ERC-721.” ERC-721 smart contracts are the standard for representing the ownership of non-fungible tokens, and they can be modified for different purposes, such as storing the digital signatures of legally binding contracts. Following the rules and regulations highlighted in the ERC-721 smart contract, you may sell, buy, or take possession of the CBNFT by interacting with the Ethereum Blockchain (through an Off-Chain interaction).
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">c. Ownership Rights and Control of Physical Asset</h2>
                                    <p className="mb-4 pl-8">
                                        The physical assets are not the property of Phynite LLC. The ownership rights remain with the seller, until the buyer purchases the CBNFT. During the process of delivering physical assets, your items may be insured up to five-thousand dollars in the case of a rare incident. The client agrees and understands that the rate of insurance during the delivery of physical assets may vary and is subject to change. Once in the possession of Phynite, your asset will be transferred to anonymous vault locations. Your physical asset will be insured up to one-hundred percent, during the time it is secured at our private vaults. The client agrees and understands that the storage fee is waived temporarily and it may be subject to change.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">4. Transactions on Phynite</h1>
                                    <h2 className="font-[500] mb-4 pl-8">a. Buy, Sell, Burn, and Transfer</h2>
                                    <p className="mb-4 pl-8">
                                        Having access on Phynite’s platform to make transactions means you will be able to do the following:
                                    </p>
                                    <h3 className="mb-4 pl-16">i. Buying</h3>
                                    <p className="mb-4 pl-16">
                                        If you have sufficient balance on your third-party wallet, you will be able to purchase a CBNFT(Buy). The client understands and agrees that one can officially buy a CBNFT by executing a buy order, or by bidding or offering a price for a CBNFT and getting that bid or offer accepted by the seller of the said CBNFT.
                                    </p>
                                    <h3 className="mb-4 pl-16">ii. Selling</h3>
                                    <p className="mb-4 pl-16">
                                        After the execution of a sale (“Selling”), fees that are associated with the Selling process will be deducted from your proceeds. These proceeds will then be deposited to your crypto wallet, associated with your Phynite Account. The client agrees and understands that only the rightful owner of the Ethereum wallet that holds the CBNFT may create sell or auction orders, and when a buyer executes a buying transaction or the seller accepts a bid or offer, the item has officially been sold.
                                    </p>
                                    <h3 className="mb-4 pl-16">iii. Burn</h3>
                                    <p className="mb-4 pl-16">
                                        After having your physical asset listed on the Phynite platform as a CBNFT, you have the right to redeem your physical asset back(through a function called “Burning” or “Burn”). The client agrees and understands when the Burn feature has been activated by the rightful owner, Phynite has the legal obligation to return your physical asset to the address you have provided.
                                    </p>
                                    <h3 className="mb-4 pl-16">iv. Fees</h3>
                                    <p className="mb-4 pl-16">
                                        Lastly, you (or the holder of a CBNFT) have the right to transfer the ownership of a CBNFT to another crypto wallet through the function called “Transfer”. The client understands that only the rightful owner of the crypto wallet and, simultaneously, the CBNFT owner has access to use the Transfer function.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">b. Fees</h2>
                                    <p className="mb-4 pl-8">
                                        The client understands and agrees that Phynite holds the right to charge fees that are in relation to transacting CBNFTs (“Trading Fees”). These Trading Fees will be highlighted and made known to you before proceeding with a transaction. The further breakdown of the Trading Fees can be found in the “Fees Page.” By interacting, transacting, and using our platform services, you understand and agree that you are responsible for paying the required fees. Additionally, you agree and understand that the rate of fees is subject to change. However, Phynite will do its full diligence to make these changes known to the user. Moreover, you may be charged fees that are in relation to network requirements when transacting Valid Tokens. You understand and agree that the network related fees are not controlled by Phynite, instead it depends on the condition of the network being used. Phynite is not responsible for wallet related fees or charges.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">c. Transaction Status</h2>
                                    <p className="mb-4 pl-8">
                                        You agree and understand that any transactions that were completed using your credentials will be assumed valid, unless otherwise notified by the client. If you believe that you are in a case related to these matters please contact hello@phynite.io.  Phynite does not have any control or responsibility over the client’s wallet. The client is responsible for their own wallet, including, but not limited to the activity, security, and transactions that occur.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">5. User Conduct</h1>
                                    <p className="mb-4 pl-4">
                                        Phynite strives to provide its users with the best community and environment to explore the web3 interface. In order to keep the standards at the highest level of expectations, Phynite holds the right to take action by limiting, refusing, suspending, or revoking your Phynite Account, removing your access to view, sell, buy, or transfer CBNFTs, and limiting user interaction on Phynite services. Furthermore, we hold the right to take action in sole discretion if you have violated any of the rules and regulations set forth by the terms of service and/or local, state, or federal laws.
                                    </p>
                                    <p className="mb-4 pl-4">
                                        The Client agrees and understands to not violate any terms of service, laws, and regulations set forth by Phynite, local, state, and federal government, and third-party applications while interacting with our services. The client further agrees to the terms listed below:
                                    </p>
                                    <ul className="mb-4 pl-12">
                                        <li className="mb-4 list-disc">
                                            You agree to follow and uphold local, state, federal, and/or all applicable laws when accessing our services.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree not to represent or replicate another identity or third party while using any of Phynite’s services.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to not use another user’s Phynite Account without consent or authorization from the account holder.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to follow the terms of service and conditions of all third-party applications and wallet providers while using their services.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You also agree to not transact, buy, sell, or hold Invalid Token.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree not to attempt to access Phynite’s services using a different blockchain address if your previous account has been suspended, revoked, or banned in any way, shape, or form.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to use Phynite’s platform for its intended use and not with the purpose to hack, dismantle, or damage the software and/or APIs being used by Phynite.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to use Phynite’s platform for its intended use and not with the purpose to deceive, scam, or enact fraudulent behaviors that may affect other users.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to not attempt dismantling, replicating, or creating a derivative of Phynite’s platform with the purpose to avoid Phynite’s fee system or commercial uses.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to use Phynite’s platform for its intended use and not with the purpose of money laundering or gambling and any financial crimes that may oppose local, state, or federal laws and Phynite’s terms of service.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to not make transactions on Phynite’s platform on the behalf of someone who is located in or bound by a U.S. embargoed area, subject to any government sanctions, owned or controlled by someone who is sanctioned or located in an embargoed area, and representatives are sanctioned or located in an embargoed area.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree not to use any of Phynite’s services, software, or CBNFTs to initiate, transact, or complete financial activities that involve(but not limited to) securities, commodities, options, or debt instruments that are subject to licensing and/or registering.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to not use illegally obtained physical assets to list on the Phynite platform with the intent to sell, buy, or transfer.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to not display any means of racism, sexism, child exploitation, self-harm, hate, violence, or any illegal content when using and interacting with Phynite.
                                        </li>
                                    </ul>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">6. Disclaimers (Limitation of liability)</h1>
                                    <p className="mb-4 pl-4">
                                        The Client understands and agrees that:
                                    </p>
                                    <p className="mb-4 pl-12">
                                        Your decision to use Phynite's service is solely at your own risk. You acknowledge that the service is provided "as is" and "as available." Phynite and its affiliates do not provide any express or implied warranties or conditions regarding the service's appropriateness for your specific needs, accuracy, availability, reliability, legality, or safety. Phynite disclaims all other warranties or conditions, including implied warranties or conditions of merchantability, fitness for a particular purpose, title, and non-infringement. Any losses incurred(not limited to profits) as a result of your use of the service or reliance on information found on the service will not be the responsibility of Phynite. Phynite makes every effort to ensure that the service is secure, but it cannot guarantee that the service, its contents, or any CBNFTs associated with it are free of viruses or other dangerous components. You acknowledge that the security of any data you provide online cannot be guaranteed, and Phynite will not be held liable for any security breaches. Phynite will not be held responsible for any losses incurred by you, including losses resulting from user error, inaccurate transactions, mistyped or misspelled addresses, data loss or infringement, unrecognizable third-party or unauthorized activity and use (which may include viruses, scams, or any other means of attacking the service or CBNFTs).
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">7. Assumption of Risk</h1>
                                    <p className="mb-4 pl-4">
                                        The Client understands and agrees that:
                                    </p>
                                    <ul className="mb-4 pl-12">
                                        <li className="mb-4 list-disc">
                                            Phynite does not own, moderate, or manage the public blockchain that is being used to make transactions on the platform. The value of the currency is subject to volatility and fluctuations in which Phynite has no control over. Due to these conditions, new rules and regulations that are implemented in the blockchain(in relation to cryptocurrency and non-fungible tokens) may negatively impact the value, service, and development of such things.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            We operate using third-party applications and vendors which are not under the direct control, management, and moderation of Phynite. Due to these circumstances, if Phynite’s relationship with these third-party applications/vendors discontinues, our services will suffer due to the absence of such functions.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            Phynite holds the right to limit, refuse, suspend, or revoke your Phynite Account, remove your access to view, sell, buy, or transfer CBNFTs, and limit user interaction on Phynite services when a claim has been made against Phynite.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            Phynite reserves the right to be released from claims, demands, and damages in relation to known and unknown natures. When you open a Phynite Account, you agree to waive any statutory protections (including claims you may have been aware of at the time of signing this agreement).
                                        </li>
                                    </ul>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">8. Dispute Resolution</h1>
                                    <p className="mb-4 pl-4">
                                        If and only if, there are any disputes, claims, or controversies that arise from the use of Phynite’s services or breaches that have been made regarding this terms of service document, it shall be resolved through a binding arbitration. Before initiating an arbitration, you must begin the dispute by sending a letter that describes the accurate nature of the claim and desired resolution to 24445 Hawthorne Blvd. Torrance, CA 90505. Both the client and Phynite agree to waive any constitutional and statutory rights to not only sue in court, but have a trial in the presence of a judge or a jury. However, Phynite and the Client agree to meet(through a video conference, phone call, or personally) to discuss the dispute and desired resolution before moving forward with an arbitration. In the case that Phynite or the Client is represented by a counsel, it is important to note that each party must have one representative(the Client who filed the claim or Phynite representative) in full attendance. If a resolution is not reached within the time period of thirty days after the initiation of the dispute, both parties hold the right to commence an arbitration, small claims court action, or file a claim for injunctive or equitable relief.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">9. Modifications to the service</h1>
                                    <p className="mb-4 pl-4">
                                        Phynite holds the right to temporarily suspend or inactivate the services due to platform modification and updates. Moreover, in total discretion, Phynite holds the right to permanently disable the services without liability as a result.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">10. Privacy Policy</h1>
                                    <p className="mb-4 pl-4">
                                        To grasp a deeper understanding of how Phynite collects, utilizes, and shares information about the Clients, please read our Privacy Policy. By creating a Phynite Account, you agree to the terms listed in the Privacy Policy, including the collection and utilization of your personal information.
                                    </p>
                                </li>
                            </ol>

                        </div>
                    </div>
                </div>
            )}
            {props.displayType === "computer" && (
                <div className="min-h-screen pt-20 flex justify-center font-poppins">
                    <div className="mt-20 w-[1300px]">
                        <h1 className="text-5xl font-semibold text-white mb-12">Terms of Service</h1>
                        <div className="bg-white w-full text-black p-16 mb-32">
                            <h1 className="font-[500] mb-4">Introduction</h1>
                            <p className="mb-8">
                                Welcome to Phynite, also known as Phynite LLC. Throughout the course of terms of service, you may be addressed as “client, ’“you,” or “your.” However, Phynite may be addressed as “us,” “we,” or “our.” The client will be required to follow, abide by, and meet the terms listed below in order to gain access to any of Phynite’s software, tools, features, interactions, and/or functionalities. This terms of service document serves as an agreement between Phynite and the Client.
                            </p>
                            <ol>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">1. Accessing Our Services</h1>
                                    <h2 className="font-[500] mb-4 pl-8">a. Age Requirement</h2>
                                    <p className="mb-4 pl-8">
                                        The client must be 18 years old or older and abide by the age of majority enforced by local jurisdiction in order to use any of Phynite’s services. Any form of lying, concealing, replacing, or replicating untruthful ages will be investigated.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">b. Local Jurisdiction and Laws</h2>
                                    <p className="mb-4 pl-8">
                                        You agree to follow and uphold local, state, federal, and/or all applicable laws when accessing our services. To use our Service, you need to confirm that you are not located in or bound by a U.S. embargoed area, not subject to any government sanctions, not owned or controlled by someone who is sanctioned or located in an embargoed area, and none of your representatives are sanctioned or located in an embargoed area. It's your responsibility to comply with all applicable laws outside the U.S. and we appreciate your cooperation.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">c. Creating a Phynite Account</h2>
                                    <p className="mb-4 pl-8">
                                        The client will be required to create a “Phynite Account,” an account registered with Phynite, in order to use any of Phynite’s software and services. Moreover, on the completion of creating a “Phynite Account,” the client agrees not to represent or replicate another identity or third party. Phynite is not responsible for any actions or activities that occur on your account. You are responsible for all of the actions or activities that occur on your account. When completing a new account with us, or already hold an account with us, we hold the right to limit, suspend, and refuse access to your “Phynite Account.” This right will only be used when the client is under investigation for imposing rules and regulations of this terms of service and/or local, state, or federal laws.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">d. Access</h2>
                                    <p className="mb-4 pl-8">
                                        Phynite is a web3 platform, which will require the client to hold a blockchain address and a third-party crypto wallet in order to interact with the platform. This is due to the fact that the blockchain address serves as your identity. The account that the client creates (“Phynite Account”) will be tied to his/her blockchain address, very similar to a username and password. By connecting your wallet with your account (“Phynite Account”), you agree follow the terms of service and conditions of your wallet provider while using their services. The wallets that are available on the platform for the client to use are not managed or owned by Phynite. This means that the client agrees and understands that Phynite does not have any control or responsibility over the wallet. The client is responsible for their own wallet, including, but not limited to the activity, security, and transactions that occur. Moreover, additional information, such as name, address, telephone number, and email address, may be asked to due delivery information, legally binding contracts, and communication methods.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">e. Phynite Email Communication to Client</h2>
                                    <p className="mb-4 pl-8">
                                        The Client agrees and understands that the main source of communication from Phynite to the Client will be mainly through email. Any other forms of communication will be provided by Phynite’s email communications which will be sent directly to the client. Any repercussions that arise from involvement scams or fraudulent activities will be held by the Client. Additionally, to avoid miscommunication and fraudulent activities, the Client understands that the email associated with the “Phynite Account” or provided is up to date.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">f. Changes Made to the Terms of Service</h2>
                                    <p className="mb-4 pl-8">
                                        Due to the upscale potential of Phynite, we hold the right to make amendments to the Terms of Service at any time. However, Phynite will not make these changes with the purpose to lie, deceive, or any malicious intent. We will do our due diligence of informing the client about these changes through our main communication method. When you begin to use our services, you agree and understand that Phynite holds the right to make these amendments. Additionally, it is the Client’s responsibility to stay up to date with the terms listed in this document.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">2. Phynite Ownership</h1>
                                    <p className="mb-4 pl-4">
                                        All aspects of Phynite’s platform design(texts, logos, and icons), features, business method (Phynite Protocol), data, smart contracts, and materials are the proprietary properties of Phynite. The client understands that any replication, reproduction, or derivatives of Phynite’s proprietary property will violate our ownership rights. In order to replicate, reproduce, or use any aspects of Phynite, you will need access directly through Phynite LLC. All other third-party content, trademarks, graphics, designs, and proprietary property are owned by their respective owners. Additionally, any third-party content, trademarks, graphics, and designs associated with a CBNFT are the property of their respective owners. This means that the client must abide by, not only Phynite’s, but the third-party’s terms of service and conditions as well. The CBNFTs listed on the “Explore Page” are digital tokens that represent the owner’s right to ownership of the physical item that it is contractually bound to. Unless specifically mentioned, the CBNFTs were not produced in partnership with third-parties, and they were not involved in the production of this digital asset. The images/videos in the CBNFT’s metadata are images of the physical asset taken by Phynite, with the purpose to display the physical assets’ conditions.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">3. Assets on Phynite</h1>
                                    <h2 className="font-[500] mb-4 pl-8">a. Physically Backed Digital Assets and CBNFTs</h2>
                                    <p className="mb-4 pl-8">
                                        When interacting and accessing Phynite’s platform, you will be able to use cryptographic protocols (“Phynite Protocol”), Ethereum(cryptocurrency network), and smart contracts. Additionally, you will also have access to buy, sell, or hold the digital representations of physical assets through the platform. The digital representation of the physical asset is called a “Physically Backed Digital Asset.” The only digital representations of physical assets that are able to be stored, supported, or transmitted through our services will be referred to as a “Valid Token” throughout the course of the Terms of Service, whereas the unverified Tokens will be referred to as an (“Invalid Token”). Phynite will not allow Invalid Tokens to be used or supported on the platform. If it is the case that an Invalid Token is being used on the platform, Phynite reserves the right to remove it immediately. Do not use your third-party wallet with the purpose to hold, send, receive, or transact Invalid Tokens. You further understand that the Valid Token will be transmitted to your crypto wallet that is linked to your Phynite Account. Phynite has no responsibility attempting to recover, track down, or recover lost Tokens due to wallet mishaps. Furthermore, third-party protocols, digital assets, and features that are not communicated directly by Phynite will be inaccessible on our platform. Repercussions from being induced to use unrelated Phynite activities, protocols, digital assets, and features will be held responsible by the Client. You also agree to not transact, buy, sell, or hold Invalid Token.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">b. CBNFTs</h2>
                                    <p className="mb-4 pl-8">
                                        When you interact with the Phynite platform, you will be able to trade Valid Tokens that represent the ownership of the physical asset or collectible through our intellectual property CBNFT (also known as Contractually Bound Non-Fungible Token).CBNFTs are NFTs (Non-Fungible Tokens) that can determine the legal obligations of entities through the changes of its state. Each CBNFT contains a unique digital identifier that cannot be reproduced, replicated, subdivided, or copied which is recorded in the blockchain with the purpose to guarantee authenticity and ownership. When you are using Phynite’s services, you will interact with computer programs that are stored on a blockchain which are only activities when specific conditions are met(“Smart Contract”.) Smart contracts are commonly used to automatically carry out an agreement, which helps everyone involved know the outcome right away, without needing a middleman or wasting time. The Smart Contract backed by Phynite is called the “ERC-721.” ERC-721 smart contracts are the standard for representing the ownership of non-fungible tokens, and they can be modified for different purposes, such as storing the digital signatures of legally binding contracts. Following the rules and regulations highlighted in the ERC-721 smart contract, you may sell, buy, or take possession of the CBNFT by interacting with the Ethereum Blockchain (through an Off-Chain interaction).
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">c. Ownership Rights and Control of Physical Asset</h2>
                                    <p className="mb-4 pl-8">
                                        The physical assets are not the property of Phynite LLC. The ownership rights remain with the seller, until the buyer purchases the CBNFT. During the process of delivering physical assets, your items may be insured up to five-thousand dollars in the case of a rare incident. The client agrees and understands that the rate of insurance during the delivery of physical assets may vary and is subject to change. Once in the possession of Phynite, your asset will be transferred to anonymous vault locations. Your physical asset will be insured up to one-hundred percent, during the time it is secured at our private vaults. The client agrees and understands that the storage fee is waived temporarily and it may be subject to change.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">4. Transactions on Phynite</h1>
                                    <h2 className="font-[500] mb-4 pl-8">a. Buy, Sell, Burn, and Transfer</h2>
                                    <p className="mb-4 pl-8">
                                        Having access on Phynite’s platform to make transactions means you will be able to do the following:
                                    </p>
                                    <h3 className="mb-4 pl-16">i. Buying</h3>
                                    <p className="mb-4 pl-16">
                                        If you have sufficient balance on your third-party wallet, you will be able to purchase a CBNFT(Buy). The client understands and agrees that one can officially buy a CBNFT by executing a buy order, or by bidding or offering a price for a CBNFT and getting that bid or offer accepted by the seller of the said CBNFT.
                                    </p>
                                    <h3 className="mb-4 pl-16">ii. Selling</h3>
                                    <p className="mb-4 pl-16">
                                        After the execution of a sale (“Selling”), fees that are associated with the Selling process will be deducted from your proceeds. These proceeds will then be deposited to your crypto wallet, associated with your Phynite Account. The client agrees and understands that only the rightful owner of the Ethereum wallet that holds the CBNFT may create sell or auction orders, and when a buyer executes a buying transaction or the seller accepts a bid or offer, the item has officially been sold.
                                    </p>
                                    <h3 className="mb-4 pl-16">iii. Burn</h3>
                                    <p className="mb-4 pl-16">
                                        After having your physical asset listed on the Phynite platform as a CBNFT, you have the right to redeem your physical asset back(through a function called “Burning” or “Burn”). The client agrees and understands when the Burn feature has been activated by the rightful owner, Phynite has the legal obligation to return your physical asset to the address you have provided.
                                    </p>
                                    <h3 className="mb-4 pl-16">iv. Fees</h3>
                                    <p className="mb-4 pl-16">
                                        Lastly, you (or the holder of a CBNFT) have the right to transfer the ownership of a CBNFT to another crypto wallet through the function called “Transfer”. The client understands that only the rightful owner of the crypto wallet and, simultaneously, the CBNFT owner has access to use the Transfer function.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">b. Fees</h2>
                                    <p className="mb-4 pl-8">
                                        The client understands and agrees that Phynite holds the right to charge fees that are in relation to transacting CBNFTs (“Trading Fees”). These Trading Fees will be highlighted and made known to you before proceeding with a transaction. The further breakdown of the Trading Fees can be found in the “Fees Page.” By interacting, transacting, and using our platform services, you understand and agree that you are responsible for paying the required fees. Additionally, you agree and understand that the rate of fees is subject to change. However, Phynite will do its full diligence to make these changes known to the user. Moreover, you may be charged fees that are in relation to network requirements when transacting Valid Tokens. You understand and agree that the network related fees are not controlled by Phynite, instead it depends on the condition of the network being used. Phynite is not responsible for wallet related fees or charges.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">c. Transaction Status</h2>
                                    <p className="mb-4 pl-8">
                                        You agree and understand that any transactions that were completed using your credentials will be assumed valid, unless otherwise notified by the client. If you believe that you are in a case related to these matters please contact hello@phynite.io.  Phynite does not have any control or responsibility over the client’s wallet. The client is responsible for their own wallet, including, but not limited to the activity, security, and transactions that occur.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">5. User Conduct</h1>
                                    <p className="mb-4 pl-4">
                                        Phynite strives to provide its users with the best community and environment to explore the web3 interface. In order to keep the standards at the highest level of expectations, Phynite holds the right to take action by limiting, refusing, suspending, or revoking your Phynite Account, removing your access to view, sell, buy, or transfer CBNFTs, and limiting user interaction on Phynite services. Furthermore, we hold the right to take action in sole discretion if you have violated any of the rules and regulations set forth by the terms of service and/or local, state, or federal laws.
                                    </p>
                                    <p className="mb-4 pl-4">
                                        The Client agrees and understands to not violate any terms of service, laws, and regulations set forth by Phynite, local, state, and federal government, and third-party applications while interacting with our services. The client further agrees to the terms listed below:
                                    </p>
                                    <ul className="mb-4 pl-12">
                                        <li className="mb-4 list-disc">
                                            You agree to follow and uphold local, state, federal, and/or all applicable laws when accessing our services.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree not to represent or replicate another identity or third party while using any of Phynite’s services.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to not use another user’s Phynite Account without consent or authorization from the account holder.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to follow the terms of service and conditions of all third-party applications and wallet providers while using their services.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You also agree to not transact, buy, sell, or hold Invalid Token.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree not to attempt to access Phynite’s services using a different blockchain address if your previous account has been suspended, revoked, or banned in any way, shape, or form.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to use Phynite’s platform for its intended use and not with the purpose to hack, dismantle, or damage the software and/or APIs being used by Phynite.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to use Phynite’s platform for its intended use and not with the purpose to deceive, scam, or enact fraudulent behaviors that may affect other users.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to not attempt dismantling, replicating, or creating a derivative of Phynite’s platform with the purpose to avoid Phynite’s fee system or commercial uses.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to use Phynite’s platform for its intended use and not with the purpose of money laundering or gambling and any financial crimes that may oppose local, state, or federal laws and Phynite’s terms of service.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to not make transactions on Phynite’s platform on the behalf of someone who is located in or bound by a U.S. embargoed area, subject to any government sanctions, owned or controlled by someone who is sanctioned or located in an embargoed area, and representatives are sanctioned or located in an embargoed area.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree not to use any of Phynite’s services, software, or CBNFTs to initiate, transact, or complete financial activities that involve(but not limited to) securities, commodities, options, or debt instruments that are subject to licensing and/or registering.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to not use illegally obtained physical assets to list on the Phynite platform with the intent to sell, buy, or transfer.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            You agree to not display any means of racism, sexism, child exploitation, self-harm, hate, violence, or any illegal content when using and interacting with Phynite.
                                        </li>
                                    </ul>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">6. Disclaimers (Limitation of liability)</h1>
                                    <p className="mb-4 pl-4">
                                        The Client understands and agrees that:
                                    </p>
                                    <p className="mb-4 pl-12">
                                        Your decision to use Phynite's service is solely at your own risk. You acknowledge that the service is provided "as is" and "as available." Phynite and its affiliates do not provide any express or implied warranties or conditions regarding the service's appropriateness for your specific needs, accuracy, availability, reliability, legality, or safety. Phynite disclaims all other warranties or conditions, including implied warranties or conditions of merchantability, fitness for a particular purpose, title, and non-infringement. Any losses incurred(not limited to profits) as a result of your use of the service or reliance on information found on the service will not be the responsibility of Phynite. Phynite makes every effort to ensure that the service is secure, but it cannot guarantee that the service, its contents, or any CBNFTs associated with it are free of viruses or other dangerous components. You acknowledge that the security of any data you provide online cannot be guaranteed, and Phynite will not be held liable for any security breaches. Phynite will not be held responsible for any losses incurred by you, including losses resulting from user error, inaccurate transactions, mistyped or misspelled addresses, data loss or infringement, unrecognizable third-party or unauthorized activity and use (which may include viruses, scams, or any other means of attacking the service or CBNFTs).
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">7. Assumption of Risk</h1>
                                    <p className="mb-4 pl-4">
                                        The Client understands and agrees that:
                                    </p>
                                    <ul className="mb-4 pl-12">
                                        <li className="mb-4 list-disc">
                                            Phynite does not own, moderate, or manage the public blockchain that is being used to make transactions on the platform. The value of the currency is subject to volatility and fluctuations in which Phynite has no control over. Due to these conditions, new rules and regulations that are implemented in the blockchain(in relation to cryptocurrency and non-fungible tokens) may negatively impact the value, service, and development of such things.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            We operate using third-party applications and vendors which are not under the direct control, management, and moderation of Phynite. Due to these circumstances, if Phynite’s relationship with these third-party applications/vendors discontinues, our services will suffer due to the absence of such functions.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            Phynite holds the right to limit, refuse, suspend, or revoke your Phynite Account, remove your access to view, sell, buy, or transfer CBNFTs, and limit user interaction on Phynite services when a claim has been made against Phynite.
                                        </li>
                                        <li className="mb-4 list-disc">
                                            Phynite reserves the right to be released from claims, demands, and damages in relation to known and unknown natures. When you open a Phynite Account, you agree to waive any statutory protections (including claims you may have been aware of at the time of signing this agreement).
                                        </li>
                                    </ul>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">8. Dispute Resolution</h1>
                                    <p className="mb-4 pl-4">
                                        If and only if, there are any disputes, claims, or controversies that arise from the use of Phynite’s services or breaches that have been made regarding this terms of service document, it shall be resolved through a binding arbitration. Before initiating an arbitration, you must begin the dispute by sending a letter that describes the accurate nature of the claim and desired resolution to 24445 Hawthorne Blvd. Torrance, CA 90505. Both the client and Phynite agree to waive any constitutional and statutory rights to not only sue in court, but have a trial in the presence of a judge or a jury. However, Phynite and the Client agree to meet(through a video conference, phone call, or personally) to discuss the dispute and desired resolution before moving forward with an arbitration. In the case that Phynite or the Client is represented by a counsel, it is important to note that each party must have one representative(the Client who filed the claim or Phynite representative) in full attendance. If a resolution is not reached within the time period of thirty days after the initiation of the dispute, both parties hold the right to commence an arbitration, small claims court action, or file a claim for injunctive or equitable relief.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">9. Modifications to the service</h1>
                                    <p className="mb-4 pl-4">
                                        Phynite holds the right to temporarily suspend or inactivate the services due to platform modification and updates. Moreover, in total discretion, Phynite holds the right to permanently disable the services without liability as a result.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">10. Privacy Policy</h1>
                                    <p className="mb-4 pl-4">
                                        To grasp a deeper understanding of how Phynite collects, utilizes, and shares information about the Clients, please read our Privacy Policy. By creating a Phynite Account, you agree to the terms listed in the Privacy Policy, including the collection and utilization of your personal information.
                                    </p>
                                </li>
                            </ol>

                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    )
}