import { useState, useEffect, useRef } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function PrivacyPolicy(props) {

    return (
        <div>
            <Navbar />
            {props.displayType === "mobile" && (
                <div className="min-h-screen pt-20 flex justify-center font-poppins">
                    <div className="mt-12 w-full px-[14px]">
                        <h1 className="text-3xl font-semibold text-white mb-8">Privacy Policy</h1>
                        <div className="bg-white w-full text-black p-8 mb-32 text-sm">
                            <h1 className="font-[500] mb-4">Introduction</h1>
                            <p className="mb-8">
                                Welcome to Phynite, also known as Phynite LLC. Throughout the course of the Privacy Policy, you may be addressed as “client, ’“you,” or “your.” However, Phynite may be addressed as “us,” “we,” or “our.” Furthermore, the term “CBNFT '' (defined as Contractually Bound Non-fungible Token) may be used throughout the course of the Privacy Policy which essentially is a token that represents the ownership of a physical asset traded on the Ethereum Network bound by a U.S. legal contract. Phynite is dedicated to protecting your privacy, including personal information and data. This Privacy Policy will define the various types of information we collect, the methods of gathering data, and the implementations we make using the information.
                            </p>
                            <ol>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 1: Types of Information Gathered</h1>
                                    <h2 className="font-[500] mb-4 pl-8">a. Personal Information</h2>
                                    <p className="mb-4 pl-8">
                                        Personal data refers to any information that relates to an identified or identifiable living individual. This information can be anything that can be used to identify an individual directly or indirectly, such as a name, address, email address, phone number, date of birth, or any other information that can be used to identify a person.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">b. Anonymous Data</h2>
                                    <p className="mb-4 pl-8">
                                        Anonymous data refers to information that does not identify an individual and cannot be used to infer or link back to the identity of an individual. This type of data is collected, processed, and analyzed in a way that prevents identification of the individual, for instance, by removing personally identifiable information or by aggregating data to a level that individual identities cannot be discerned.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 2: How Phynite gathers Personal and Anonymous Data</h1>
                                    <h2 className="font-[500] mb-4 pl-8">a. Phynite Account Set Up</h2>
                                    <p className="mb-4 pl-8">
                                        Before using our services, you will be required to create a Phynite Account. During this process we will require you to provide Personal Information, such as  name, address, email address, phone number, and date of birth.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">b. Profile</h2>
                                    <p className="mb-4 pl-8">
                                        Phynite offers the ability for you to enable certain features and preferences on your Phynite Account. We may take these choices and correlate them to your Phynite account, device used, or third-party wallet address.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">c. Feedback</h2>
                                    <p className="mb-4 pl-8">
                                        Phynite prides itself in absorbing as much user feedback as possible in order to provide consistent optimal conditions. By giving us feedback, we may collect Personal Information, such as name, feedback content, phone number, and/or email.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">d. Voluntary</h2>
                                    <p className="mb-4 pl-8">
                                        In certain situations, Phynite may ask you for voluntary information for data collecting reasons.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 3: How Phynite Uses Gathered Information</h1>
                                    <h2 className="mb-4 pl-4">We may use your personal information to:</h2>
                                    <ul className="mb-4 pl-12">
                                        <li className="mb-4 list-disc">Provide our services to you.</li>
                                        <li className="mb-4 list-disc">Process your orders and payments.</li>
                                        <li className="mb-4 list-disc">Communicate with you about your account or our services.</li>
                                        <li className="mb-4 list-disc">Send you marketing communications if you have opted in to receive them.</li>
                                        <li className="mb-4 list-disc">Improve our platform and services.</li>
                                        <li className="mb-4 list-disc">Comply with legal requirements.</li>
                                        <li className="mb-4 list-disc">Investigate users who have breached our Terms of Service.</li>
                                        <li className="mb-4 list-disc">Send verification messages to verify the rightful owner of a CBNFT.</li>
                                        <li className="mb-4 list-disc">Use your personal information for analytical and statistical purposes, to detect and prevent fraud, and to protect the security of our services.</li>
                                    </ul>
                                    <h2 className="mb-4 pl-4">Phynite holds the right to disclose any or all Anonymous Information that has been gathered to third-party services, affiliates, and applications.</h2>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 4: Disclosing Personal Data:</h1>
                                    <p className="mb-4 pl-4">We may share your personal information with third-party service providers who help us provide our services, such as payment processors or shipping providers. These service providers are only authorized to use your personal information to the extent necessary to perform services on our behalf and are required to maintain the confidentiality and security of your information.</p>
                                    <p className="mb-4 pl-4">We may also share your information with our affiliates, which are companies that are under common ownership or control with us. Our affiliates may use your personal information for marketing or other purposes consistent with this Privacy Policy.</p>
                                    <p className="mb-4 pl-4">In addition, we may share your personal information if required by law or if we believe it is necessary to protect our rights or the rights of others. For example, we may disclose your personal information in response to a subpoena or court order, or to prevent or investigate potential fraud, security breaches, or illegal activities.</p>
                                    <p className="mb-4 pl-4">If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred as part of that transaction. We will notify you of any such change in ownership or control of your personal information.</p>
                                    <p className="mb-4 pl-4">We may also share your personal information with other users of our services if you engage in transactions or interactions with them. For example, if you purchase a product from another user, we may share your name, shipping address, and other necessary information with that user to facilitate the transaction.</p>
                                    <p className="mb-4 pl-4">Please note that if you choose to disclose personal information in public areas of our website or third-party website links, such as message boards or forums, that information may be visible to other users and can be read, collected, or used by them. We are not responsible for the personal information you choose to submit in these public areas. We may use and disclose anonymous information for any purpose, including marketing and advertising, without restriction.</p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 5: Information Accessibility</h1>
                                    <p className="mb-4 pl-4">The Client has access to view, edit, or delete certain Personal Information that has been provided to Phynite through your account settings. If you reside in California, you have additional rights under the California Consumer Privacy Act. Moreover, if you reside in the European Area or United Kingdom you have granted additional rights under the General Data Protection Regulation as well. When exercising these additional rights, please contact team@phynite.io so we could further assist your request. </p>
                                    <p className="mb-4 pl-4">One important aspect to note is that Phynite does not have the access to view, edit, or delete Personal Information that is stored on the Ethereum Blockchain. This is due to the fact that we do not own, manage, or moderate the Ethereum Blockchain in any shape or form.</p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 6: Data Retention</h1>
                                    <p className="mb-4 pl-4">We will retain your personal information for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements. If you hold a Phynite account, we will retain your personal information for as long as your account is active or as needed to provide you with our services. If you wish to cancel your account or request that we no longer use your personal information to provide you with our services, please contact us at team@phynite.io. We may retain and use your personal information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our agreements. We may also retain and use anonymous information for any purpose, including marketing and advertising, without restriction.</p>
                                    <p className="mb-4 pl-4">If we no longer need your personal information for any of the purposes for which we collected it, we will take reasonable steps to securely destroy or permanently de-identify that information. Please note that we may be required by law to retain certain information for a certain period of time. In such cases, we will comply with the law and ensure that any such retention is done in a manner that protects your privacy rights.</p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 7: Children’s Policy</h1>
                                    <p className="mb-4 pl-4">Phynite’s age requirement of 18 years old (highlighted in the Terms of Service) is mandated for a reason. Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under the age of 13.</p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 8: Changes Made</h1>
                                    <p className="mb-4 pl-4">Due to the upscale potential of Phynite, we hold the right to make amendments to the Privacy Policy at any time. However, Phynite will not make these changes with the purpose to lie, deceive, or any malicious intent. We will do our due diligence of informing the client about these changes through our main communication method.</p>
                                </li>
                                
                            </ol>

                        </div>
                    </div>
                </div>
            )}
            {props.displayType === "tablet" && (
                <div className="min-h-screen pt-20 flex justify-center font-poppins">
                    <div className="mt-20 w-full px-[18px]">
                        <h1 className="text-5xl font-semibold text-white mb-12">Privacy Policy</h1>
                        <div className="bg-white w-full text-black p-16 mb-32">
                            <h1 className="font-[500] mb-4">Introduction</h1>
                            <p className="mb-8">
                                Welcome to Phynite, also known as Phynite LLC. Throughout the course of the Privacy Policy, you may be addressed as “client, ’“you,” or “your.” However, Phynite may be addressed as “us,” “we,” or “our.” Furthermore, the term “CBNFT '' (defined as Contractually Bound Non-fungible Token) may be used throughout the course of the Privacy Policy which essentially is a token that represents the ownership of a physical asset traded on the Ethereum Network bound by a U.S. legal contract. Phynite is dedicated to protecting your privacy, including personal information and data. This Privacy Policy will define the various types of information we collect, the methods of gathering data, and the implementations we make using the information.
                            </p>
                            <ol>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 1: Types of Information Gathered</h1>
                                    <h2 className="font-[500] mb-4 pl-8">a. Personal Information</h2>
                                    <p className="mb-4 pl-8">
                                        Personal data refers to any information that relates to an identified or identifiable living individual. This information can be anything that can be used to identify an individual directly or indirectly, such as a name, address, email address, phone number, date of birth, or any other information that can be used to identify a person.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">b. Anonymous Data</h2>
                                    <p className="mb-4 pl-8">
                                        Anonymous data refers to information that does not identify an individual and cannot be used to infer or link back to the identity of an individual. This type of data is collected, processed, and analyzed in a way that prevents identification of the individual, for instance, by removing personally identifiable information or by aggregating data to a level that individual identities cannot be discerned.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 2: How Phynite gathers Personal and Anonymous Data</h1>
                                    <h2 className="font-[500] mb-4 pl-8">a. Phynite Account Set Up</h2>
                                    <p className="mb-4 pl-8">
                                        Before using our services, you will be required to create a Phynite Account. During this process we will require you to provide Personal Information, such as  name, address, email address, phone number, and date of birth.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">b. Profile</h2>
                                    <p className="mb-4 pl-8">
                                        Phynite offers the ability for you to enable certain features and preferences on your Phynite Account. We may take these choices and correlate them to your Phynite account, device used, or third-party wallet address.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">c. Feedback</h2>
                                    <p className="mb-4 pl-8">
                                        Phynite prides itself in absorbing as much user feedback as possible in order to provide consistent optimal conditions. By giving us feedback, we may collect Personal Information, such as name, feedback content, phone number, and/or email.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">d. Voluntary</h2>
                                    <p className="mb-4 pl-8">
                                        In certain situations, Phynite may ask you for voluntary information for data collecting reasons.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 3: How Phynite Uses Gathered Information</h1>
                                    <h2 className="mb-4 pl-4">We may use your personal information to:</h2>
                                    <ul className="mb-4 pl-12">
                                        <li className="mb-4 list-disc">Provide our services to you.</li>
                                        <li className="mb-4 list-disc">Process your orders and payments.</li>
                                        <li className="mb-4 list-disc">Communicate with you about your account or our services.</li>
                                        <li className="mb-4 list-disc">Send you marketing communications if you have opted in to receive them.</li>
                                        <li className="mb-4 list-disc">Improve our platform and services.</li>
                                        <li className="mb-4 list-disc">Comply with legal requirements.</li>
                                        <li className="mb-4 list-disc">Investigate users who have breached our Terms of Service.</li>
                                        <li className="mb-4 list-disc">Send verification messages to verify the rightful owner of a CBNFT.</li>
                                        <li className="mb-4 list-disc">Use your personal information for analytical and statistical purposes, to detect and prevent fraud, and to protect the security of our services.</li>
                                    </ul>
                                    <h2 className="mb-4 pl-4">Phynite holds the right to disclose any or all Anonymous Information that has been gathered to third-party services, affiliates, and applications.</h2>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 4: Disclosing Personal Data:</h1>
                                    <p className="mb-4 pl-4">We may share your personal information with third-party service providers who help us provide our services, such as payment processors or shipping providers. These service providers are only authorized to use your personal information to the extent necessary to perform services on our behalf and are required to maintain the confidentiality and security of your information.</p>
                                    <p className="mb-4 pl-4">We may also share your information with our affiliates, which are companies that are under common ownership or control with us. Our affiliates may use your personal information for marketing or other purposes consistent with this Privacy Policy.</p>
                                    <p className="mb-4 pl-4">In addition, we may share your personal information if required by law or if we believe it is necessary to protect our rights or the rights of others. For example, we may disclose your personal information in response to a subpoena or court order, or to prevent or investigate potential fraud, security breaches, or illegal activities.</p>
                                    <p className="mb-4 pl-4">If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred as part of that transaction. We will notify you of any such change in ownership or control of your personal information.</p>
                                    <p className="mb-4 pl-4">We may also share your personal information with other users of our services if you engage in transactions or interactions with them. For example, if you purchase a product from another user, we may share your name, shipping address, and other necessary information with that user to facilitate the transaction.</p>
                                    <p className="mb-4 pl-4">Please note that if you choose to disclose personal information in public areas of our website or third-party website links, such as message boards or forums, that information may be visible to other users and can be read, collected, or used by them. We are not responsible for the personal information you choose to submit in these public areas. We may use and disclose anonymous information for any purpose, including marketing and advertising, without restriction.</p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 5: Information Accessibility</h1>
                                    <p className="mb-4 pl-4">The Client has access to view, edit, or delete certain Personal Information that has been provided to Phynite through your account settings. If you reside in California, you have additional rights under the California Consumer Privacy Act. Moreover, if you reside in the European Area or United Kingdom you have granted additional rights under the General Data Protection Regulation as well. When exercising these additional rights, please contact team@phynite.io so we could further assist your request. </p>
                                    <p className="mb-4 pl-4">One important aspect to note is that Phynite does not have the access to view, edit, or delete Personal Information that is stored on the Ethereum Blockchain. This is due to the fact that we do not own, manage, or moderate the Ethereum Blockchain in any shape or form.</p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 6: Data Retention</h1>
                                    <p className="mb-4 pl-4">We will retain your personal information for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements. If you hold a Phynite account, we will retain your personal information for as long as your account is active or as needed to provide you with our services. If you wish to cancel your account or request that we no longer use your personal information to provide you with our services, please contact us at team@phynite.io. We may retain and use your personal information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our agreements. We may also retain and use anonymous information for any purpose, including marketing and advertising, without restriction.</p>
                                    <p className="mb-4 pl-4">If we no longer need your personal information for any of the purposes for which we collected it, we will take reasonable steps to securely destroy or permanently de-identify that information. Please note that we may be required by law to retain certain information for a certain period of time. In such cases, we will comply with the law and ensure that any such retention is done in a manner that protects your privacy rights.</p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 7: Children’s Policy</h1>
                                    <p className="mb-4 pl-4">Phynite’s age requirement of 18 years old (highlighted in the Terms of Service) is mandated for a reason. Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under the age of 13.</p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 8: Changes Made</h1>
                                    <p className="mb-4 pl-4">Due to the upscale potential of Phynite, we hold the right to make amendments to the Privacy Policy at any time. However, Phynite will not make these changes with the purpose to lie, deceive, or any malicious intent. We will do our due diligence of informing the client about these changes through our main communication method.</p>
                                </li>
                                
                            </ol>

                        </div>
                    </div>
                </div>
            )}
            {props.displayType === "smallComputer" && (
                <div className="min-h-screen pt-20 flex justify-center font-poppins">
                    <div className="mt-20 w-full px-8">
                        <h1 className="text-5xl font-semibold text-white mb-12">Privacy Policy</h1>
                        <div className="bg-white w-full text-black p-16 mb-32">
                            <h1 className="font-[500] mb-4">Introduction</h1>
                            <p className="mb-8">
                                Welcome to Phynite, also known as Phynite LLC. Throughout the course of the Privacy Policy, you may be addressed as “client, ’“you,” or “your.” However, Phynite may be addressed as “us,” “we,” or “our.” Furthermore, the term “CBNFT '' (defined as Contractually Bound Non-fungible Token) may be used throughout the course of the Privacy Policy which essentially is a token that represents the ownership of a physical asset traded on the Ethereum Network bound by a U.S. legal contract. Phynite is dedicated to protecting your privacy, including personal information and data. This Privacy Policy will define the various types of information we collect, the methods of gathering data, and the implementations we make using the information.
                            </p>
                            <ol>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 1: Types of Information Gathered</h1>
                                    <h2 className="font-[500] mb-4 pl-8">a. Personal Information</h2>
                                    <p className="mb-4 pl-8">
                                        Personal data refers to any information that relates to an identified or identifiable living individual. This information can be anything that can be used to identify an individual directly or indirectly, such as a name, address, email address, phone number, date of birth, or any other information that can be used to identify a person.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">b. Anonymous Data</h2>
                                    <p className="mb-4 pl-8">
                                        Anonymous data refers to information that does not identify an individual and cannot be used to infer or link back to the identity of an individual. This type of data is collected, processed, and analyzed in a way that prevents identification of the individual, for instance, by removing personally identifiable information or by aggregating data to a level that individual identities cannot be discerned.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 2: How Phynite gathers Personal and Anonymous Data</h1>
                                    <h2 className="font-[500] mb-4 pl-8">a. Phynite Account Set Up</h2>
                                    <p className="mb-4 pl-8">
                                        Before using our services, you will be required to create a Phynite Account. During this process we will require you to provide Personal Information, such as  name, address, email address, phone number, and date of birth.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">b. Profile</h2>
                                    <p className="mb-4 pl-8">
                                        Phynite offers the ability for you to enable certain features and preferences on your Phynite Account. We may take these choices and correlate them to your Phynite account, device used, or third-party wallet address.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">c. Feedback</h2>
                                    <p className="mb-4 pl-8">
                                        Phynite prides itself in absorbing as much user feedback as possible in order to provide consistent optimal conditions. By giving us feedback, we may collect Personal Information, such as name, feedback content, phone number, and/or email.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">d. Voluntary</h2>
                                    <p className="mb-4 pl-8">
                                        In certain situations, Phynite may ask you for voluntary information for data collecting reasons.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 3: How Phynite Uses Gathered Information</h1>
                                    <h2 className="mb-4 pl-4">We may use your personal information to:</h2>
                                    <ul className="mb-4 pl-12">
                                        <li className="mb-4 list-disc">Provide our services to you.</li>
                                        <li className="mb-4 list-disc">Process your orders and payments.</li>
                                        <li className="mb-4 list-disc">Communicate with you about your account or our services.</li>
                                        <li className="mb-4 list-disc">Send you marketing communications if you have opted in to receive them.</li>
                                        <li className="mb-4 list-disc">Improve our platform and services.</li>
                                        <li className="mb-4 list-disc">Comply with legal requirements.</li>
                                        <li className="mb-4 list-disc">Investigate users who have breached our Terms of Service.</li>
                                        <li className="mb-4 list-disc">Send verification messages to verify the rightful owner of a CBNFT.</li>
                                        <li className="mb-4 list-disc">Use your personal information for analytical and statistical purposes, to detect and prevent fraud, and to protect the security of our services.</li>
                                    </ul>
                                    <h2 className="mb-4 pl-4">Phynite holds the right to disclose any or all Anonymous Information that has been gathered to third-party services, affiliates, and applications.</h2>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 4: Disclosing Personal Data:</h1>
                                    <p className="mb-4 pl-4">We may share your personal information with third-party service providers who help us provide our services, such as payment processors or shipping providers. These service providers are only authorized to use your personal information to the extent necessary to perform services on our behalf and are required to maintain the confidentiality and security of your information.</p>
                                    <p className="mb-4 pl-4">We may also share your information with our affiliates, which are companies that are under common ownership or control with us. Our affiliates may use your personal information for marketing or other purposes consistent with this Privacy Policy.</p>
                                    <p className="mb-4 pl-4">In addition, we may share your personal information if required by law or if we believe it is necessary to protect our rights or the rights of others. For example, we may disclose your personal information in response to a subpoena or court order, or to prevent or investigate potential fraud, security breaches, or illegal activities.</p>
                                    <p className="mb-4 pl-4">If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred as part of that transaction. We will notify you of any such change in ownership or control of your personal information.</p>
                                    <p className="mb-4 pl-4">We may also share your personal information with other users of our services if you engage in transactions or interactions with them. For example, if you purchase a product from another user, we may share your name, shipping address, and other necessary information with that user to facilitate the transaction.</p>
                                    <p className="mb-4 pl-4">Please note that if you choose to disclose personal information in public areas of our website or third-party website links, such as message boards or forums, that information may be visible to other users and can be read, collected, or used by them. We are not responsible for the personal information you choose to submit in these public areas. We may use and disclose anonymous information for any purpose, including marketing and advertising, without restriction.</p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 5: Information Accessibility</h1>
                                    <p className="mb-4 pl-4">The Client has access to view, edit, or delete certain Personal Information that has been provided to Phynite through your account settings. If you reside in California, you have additional rights under the California Consumer Privacy Act. Moreover, if you reside in the European Area or United Kingdom you have granted additional rights under the General Data Protection Regulation as well. When exercising these additional rights, please contact team@phynite.io so we could further assist your request. </p>
                                    <p className="mb-4 pl-4">One important aspect to note is that Phynite does not have the access to view, edit, or delete Personal Information that is stored on the Ethereum Blockchain. This is due to the fact that we do not own, manage, or moderate the Ethereum Blockchain in any shape or form.</p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 6: Data Retention</h1>
                                    <p className="mb-4 pl-4">We will retain your personal information for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements. If you hold a Phynite account, we will retain your personal information for as long as your account is active or as needed to provide you with our services. If you wish to cancel your account or request that we no longer use your personal information to provide you with our services, please contact us at team@phynite.io. We may retain and use your personal information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our agreements. We may also retain and use anonymous information for any purpose, including marketing and advertising, without restriction.</p>
                                    <p className="mb-4 pl-4">If we no longer need your personal information for any of the purposes for which we collected it, we will take reasonable steps to securely destroy or permanently de-identify that information. Please note that we may be required by law to retain certain information for a certain period of time. In such cases, we will comply with the law and ensure that any such retention is done in a manner that protects your privacy rights.</p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 7: Children’s Policy</h1>
                                    <p className="mb-4 pl-4">Phynite’s age requirement of 18 years old (highlighted in the Terms of Service) is mandated for a reason. Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under the age of 13.</p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 8: Changes Made</h1>
                                    <p className="mb-4 pl-4">Due to the upscale potential of Phynite, we hold the right to make amendments to the Privacy Policy at any time. However, Phynite will not make these changes with the purpose to lie, deceive, or any malicious intent. We will do our due diligence of informing the client about these changes through our main communication method.</p>
                                </li>
                                
                            </ol>

                        </div>
                    </div>
                </div>
            )}
            {props.displayType === "computer" && (
                <div className="min-h-screen pt-20 flex justify-center font-poppins">
                    <div className="mt-20 w-[1300px]">
                        <h1 className="text-5xl font-semibold text-white mb-12">Privacy Policy</h1>
                        <div className="bg-white w-full text-black p-16 mb-32">
                            <h1 className="font-[500] mb-4">Introduction</h1>
                            <p className="mb-8">
                                Welcome to Phynite, also known as Phynite LLC. Throughout the course of the Privacy Policy, you may be addressed as “client, ’“you,” or “your.” However, Phynite may be addressed as “us,” “we,” or “our.” Furthermore, the term “CBNFT '' (defined as Contractually Bound Non-fungible Token) may be used throughout the course of the Privacy Policy which essentially is a token that represents the ownership of a physical asset traded on the Ethereum Network bound by a U.S. legal contract. Phynite is dedicated to protecting your privacy, including personal information and data. This Privacy Policy will define the various types of information we collect, the methods of gathering data, and the implementations we make using the information.
                            </p>
                            <ol>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 1: Types of Information Gathered</h1>
                                    <h2 className="font-[500] mb-4 pl-8">a. Personal Information</h2>
                                    <p className="mb-4 pl-8">
                                        Personal data refers to any information that relates to an identified or identifiable living individual. This information can be anything that can be used to identify an individual directly or indirectly, such as a name, address, email address, phone number, date of birth, or any other information that can be used to identify a person.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">b. Anonymous Data</h2>
                                    <p className="mb-4 pl-8">
                                        Anonymous data refers to information that does not identify an individual and cannot be used to infer or link back to the identity of an individual. This type of data is collected, processed, and analyzed in a way that prevents identification of the individual, for instance, by removing personally identifiable information or by aggregating data to a level that individual identities cannot be discerned.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 2: How Phynite gathers Personal and Anonymous Data</h1>
                                    <h2 className="font-[500] mb-4 pl-8">a. Phynite Account Set Up</h2>
                                    <p className="mb-4 pl-8">
                                        Before using our services, you will be required to create a Phynite Account. During this process we will require you to provide Personal Information, such as  name, address, email address, phone number, and date of birth.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">b. Profile</h2>
                                    <p className="mb-4 pl-8">
                                        Phynite offers the ability for you to enable certain features and preferences on your Phynite Account. We may take these choices and correlate them to your Phynite account, device used, or third-party wallet address.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">c. Feedback</h2>
                                    <p className="mb-4 pl-8">
                                        Phynite prides itself in absorbing as much user feedback as possible in order to provide consistent optimal conditions. By giving us feedback, we may collect Personal Information, such as name, feedback content, phone number, and/or email.
                                    </p>
                                    <h2 className="font-[500] mb-4 pl-8">d. Voluntary</h2>
                                    <p className="mb-4 pl-8">
                                        In certain situations, Phynite may ask you for voluntary information for data collecting reasons.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 3: How Phynite Uses Gathered Information</h1>
                                    <h2 className="mb-4 pl-4">We may use your personal information to:</h2>
                                    <ul className="mb-4 pl-12">
                                        <li className="mb-4 list-disc">Provide our services to you.</li>
                                        <li className="mb-4 list-disc">Process your orders and payments.</li>
                                        <li className="mb-4 list-disc">Communicate with you about your account or our services.</li>
                                        <li className="mb-4 list-disc">Send you marketing communications if you have opted in to receive them.</li>
                                        <li className="mb-4 list-disc">Improve our platform and services.</li>
                                        <li className="mb-4 list-disc">Comply with legal requirements.</li>
                                        <li className="mb-4 list-disc">Investigate users who have breached our Terms of Service.</li>
                                        <li className="mb-4 list-disc">Send verification messages to verify the rightful owner of a CBNFT.</li>
                                        <li className="mb-4 list-disc">Use your personal information for analytical and statistical purposes, to detect and prevent fraud, and to protect the security of our services.</li>
                                    </ul>
                                    <h2 className="mb-4 pl-4">Phynite holds the right to disclose any or all Anonymous Information that has been gathered to third-party services, affiliates, and applications.</h2>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 4: Disclosing Personal Data:</h1>
                                    <p className="mb-4 pl-4">We may share your personal information with third-party service providers who help us provide our services, such as payment processors or shipping providers. These service providers are only authorized to use your personal information to the extent necessary to perform services on our behalf and are required to maintain the confidentiality and security of your information.</p>
                                    <p className="mb-4 pl-4">We may also share your information with our affiliates, which are companies that are under common ownership or control with us. Our affiliates may use your personal information for marketing or other purposes consistent with this Privacy Policy.</p>
                                    <p className="mb-4 pl-4">In addition, we may share your personal information if required by law or if we believe it is necessary to protect our rights or the rights of others. For example, we may disclose your personal information in response to a subpoena or court order, or to prevent or investigate potential fraud, security breaches, or illegal activities.</p>
                                    <p className="mb-4 pl-4">If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred as part of that transaction. We will notify you of any such change in ownership or control of your personal information.</p>
                                    <p className="mb-4 pl-4">We may also share your personal information with other users of our services if you engage in transactions or interactions with them. For example, if you purchase a product from another user, we may share your name, shipping address, and other necessary information with that user to facilitate the transaction.</p>
                                    <p className="mb-4 pl-4">Please note that if you choose to disclose personal information in public areas of our website or third-party website links, such as message boards or forums, that information may be visible to other users and can be read, collected, or used by them. We are not responsible for the personal information you choose to submit in these public areas. We may use and disclose anonymous information for any purpose, including marketing and advertising, without restriction.</p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 5: Information Accessibility</h1>
                                    <p className="mb-4 pl-4">The Client has access to view, edit, or delete certain Personal Information that has been provided to Phynite through your account settings. If you reside in California, you have additional rights under the California Consumer Privacy Act. Moreover, if you reside in the European Area or United Kingdom you have granted additional rights under the General Data Protection Regulation as well. When exercising these additional rights, please contact team@phynite.io so we could further assist your request. </p>
                                    <p className="mb-4 pl-4">One important aspect to note is that Phynite does not have the access to view, edit, or delete Personal Information that is stored on the Ethereum Blockchain. This is due to the fact that we do not own, manage, or moderate the Ethereum Blockchain in any shape or form.</p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 6: Data Retention</h1>
                                    <p className="mb-4 pl-4">We will retain your personal information for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements. If you hold a Phynite account, we will retain your personal information for as long as your account is active or as needed to provide you with our services. If you wish to cancel your account or request that we no longer use your personal information to provide you with our services, please contact us at team@phynite.io. We may retain and use your personal information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our agreements. We may also retain and use anonymous information for any purpose, including marketing and advertising, without restriction.</p>
                                    <p className="mb-4 pl-4">If we no longer need your personal information for any of the purposes for which we collected it, we will take reasonable steps to securely destroy or permanently de-identify that information. Please note that we may be required by law to retain certain information for a certain period of time. In such cases, we will comply with the law and ensure that any such retention is done in a manner that protects your privacy rights.</p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 7: Children’s Policy</h1>
                                    <p className="mb-4 pl-4">Phynite’s age requirement of 18 years old (highlighted in the Terms of Service) is mandated for a reason. Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under the age of 13.</p>
                                </li>
                                <li className="mb-4">
                                    <h1 className="font-[500] mb-4">Section 8: Changes Made</h1>
                                    <p className="mb-4 pl-4">Due to the upscale potential of Phynite, we hold the right to make amendments to the Privacy Policy at any time. However, Phynite will not make these changes with the purpose to lie, deceive, or any malicious intent. We will do our due diligence of informing the client about these changes through our main communication method.</p>
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