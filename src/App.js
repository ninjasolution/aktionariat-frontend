import './scss/App.css';
import './css/fork_helper.css';
import Base from './jsx/layout/base/Base';

// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";


// ......................Pages import.....................
import Homepage from './jsx/pages/homepage/Homepage'
import ForCompanies from './jsx/pages/for_companies/for_companies';
import ForInvestors from './jsx/pages/ForInvestors/ForInvestors';
import OurProducts from './jsx/pages/OurProducts/OurProducts';
import Login from './jsx/pages/login/login';
import BossInfo from './jsx/pages/bossInfo/bossInfo';
import About from './jsx/pages/about/About';
import FAQ from './jsx/pages/FAQ/FAQ';
// Documentation pages
import Documentation from './jsx/pages/documentation/Documentation';
import DocumentationHowToBuy from './jsx/pages/documentation/DocumentationHowToBuy';
import DocumentationSettingUpWallet from './jsx/pages/documentation/DocumentationSettingUpWallet';
import DocumentationFundingWallet from './jsx/pages/documentation/DocumentationFundingWallet';
import DocumentationFundingOptimism from './jsx/pages/documentation/DocumentationFundingOptimism';
import DocumentationRamp from './jsx/pages/documentation/DocumentationRamp';
import DocumentationLedgerNano from './jsx/pages/documentation/DocumentationLedgerNano';
import DocumentationChecklist from './jsx/pages/documentation/DocumentationChecklist';
import DocumentationDashboard from './jsx/pages/documentation/DocumentationDashboard';
import DocumentationSettingWidgets from './jsx/pages/documentation/DocumentationSettingWidgets';
import DocumentationShareholder from './jsx/pages/documentation/DocumentationShareholder';
import DocumentationContract from './jsx/pages/documentation/DocumentationContract';
import DocumentationRecovery from './jsx/pages/documentation/DocumentationRecovery';
import DocumentationDragAlong from './jsx/pages/documentation/DocumentationDragAlong';
import DocumentationInfinite from './jsx/pages/documentation/DocumentationInfinite';
import DocumentationAllowlist from './jsx/pages/documentation/DocumentationAllowlist';
// Documentation pages end

import Blogs from './jsx/pages/Blogs/Blogs';

// Not Found 404 page
import NotFound from './jsx/pages/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Base>
          <Routes>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route path="/for-companies" element={<ForCompanies></ForCompanies>}></Route>
            <Route path="/for-investors" element={<ForInvestors></ForInvestors>}></Route>
            <Route path="/our-products/brokerbot" element={<OurProducts></OurProducts>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/bossinfo" element={<BossInfo></BossInfo>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            {/* for language en, de */}
            <Route path="/faq/en" element={<FAQ></FAQ>}></Route>
            <Route path="/faq/de" element={<FAQ></FAQ>}></Route>

            {/* Documentation pages */}
            <Route path="/documentation" element={<Documentation></Documentation>}></Route>
            <Route path="/documentation/how-to-buy-aktionariat-shares" element={<DocumentationHowToBuy></DocumentationHowToBuy>}></Route>
            <Route path="/documentation/setting-up-your-wallet" element={<DocumentationSettingUpWallet></DocumentationSettingUpWallet>}></Route>
            <Route path="/documentation/funding-your-wallet" element={<DocumentationFundingWallet></DocumentationFundingWallet>}></Route>
            <Route path="/documentation/funding-your-wallet-for-optimism" element={<DocumentationFundingOptimism></DocumentationFundingOptimism>}></Route>
            <Route path="/documentation/off-ramp-your-xchf" element={<DocumentationRamp></DocumentationRamp>}></Route>
            <Route path="/documentation/adding-ledger-as-an-additional-signer" element={<DocumentationLedgerNano></DocumentationLedgerNano>}></Route>
            <Route path="/documentation/adding-ledger-as-an-additional-signer" element={<DocumentationLedgerNano></DocumentationLedgerNano>}></Route>
            <Route path="/documentation/tokenization-checklist" element={<DocumentationChecklist></DocumentationChecklist>}></Route>
            <Route path="/documentation/accessing-corporate-dashboard" element={<DocumentationDashboard></DocumentationDashboard>}></Route>
            <Route path="/documentation/setting-up-our-widgets" element={<DocumentationSettingWidgets></DocumentationSettingWidgets>}></Route>
            <Route path="/documentation/shareholder-registry" element={<DocumentationShareholder></DocumentationShareholder>}></Route>
            <Route path="/documentation/multisignature-contract" element={<DocumentationContract></DocumentationContract>}></Route>
            <Route path="/documentation/recovery-mechanism" element={<DocumentationRecovery></DocumentationRecovery>}></Route>
            <Route path="/documentation/drag-along-mechanism" element={<DocumentationDragAlong></DocumentationDragAlong>}></Route>
            <Route path="/documentation/infinite-erc-20-allowances" element={<DocumentationInfinite></DocumentationInfinite>}></Route>
            <Route path="/documentation/allowlist" element={<DocumentationAllowlist></DocumentationAllowlist>}></Route>

            {/* Documentation pages End*/}
            <Route path="/blog" element={<Blogs></Blogs>}></Route>


            {/* Not Found 404 page */}
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  )
}
export default App;
