import { useState, useMemo, useEffect } from 'react';
import { JuteExportProduct, RFQItem, CategoryType, Currency } from './types';
import { TOP_10_EXPORT_PRODUCTS, CURRENCIES } from './data/products';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { BengalGoldenFiberStory } from './components/BengalGoldenFiberStory';
import { CatalogueGrid } from './components/CatalogueGrid';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ContainerCalculatorModal } from './components/ContainerCalculatorModal';
import { RFQDrawer } from './components/RFQDrawer';
import { ExportLogisticsBanner } from './components/ExportLogisticsBanner';
import { Footer } from './components/Footer';

export function App() {
  const [currentCurrency, setCurrentCurrency] = useState<Currency>(CURRENCIES[0]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('top-10-exports');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'rank' | 'price-asc' | 'price-desc' | 'rating'>('rank');

  // Modals & Drawers
  const [selectedProduct, setSelectedProduct] = useState<JuteExportProduct | null>(null);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [calculatorInitialProduct, setCalculatorInitialProduct] = useState<JuteExportProduct | null>(null);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [isRFQOpen, setIsRFQOpen] = useState(false);

  // Persistent RFQ Items
  const [rfqItems, setRfqItems] = useState<RFQItem[]>(() => {
    try {
      const saved = localStorage.getItem('bd_jute_rfq');
      if (saved) {
        const parsed = JSON.parse(saved);
        // rehydrate product instances
        return parsed.map((item: any) => {
          const matched = TOP_10_EXPORT_PRODUCTS.find((p) => p.id === item.product.id) || item.product;
          return { ...item, product: matched };
        });
      }
      // Default with first export item in RFQ to welcome new buyers
      return [
        { product: TOP_10_EXPORT_PRODUCTS[0], quantity: 18000 }
      ];
    } catch {
      return [{ product: TOP_10_EXPORT_PRODUCTS[0], quantity: 18000 }];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('bd_jute_rfq', JSON.stringify(rfqItems));
    } catch {
      // ignore
    }
  }, [rfqItems]);

  // Handle RFQ Actions
  const handleAddToRFQ = (product: JuteExportProduct, quantity?: number) => {
    setRfqItems((prev) => {
      const existingIdx = prev.findIndex((item) => item.product.id === product.id);
      let defaultQty = 1000;
      if (product.priceUnitLabel.includes('Metric Ton')) {
        defaultQty = 15;
      } else if (product.priceUnitLabel.includes('sq. meter')) {
        defaultQty = 20000;
      } else if (product.id.includes('sonali')) {
        defaultQty = 50000;
      } else if (product.priceUnitLabel.includes('Bag')) {
        defaultQty = 18000;
      }

      const addQty = quantity || defaultQty;

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += addQty;
        return updated;
      } else {
        return [
          ...prev,
          {
            product,
            quantity: addQty
          }
        ];
      }
    });
  };

  const handleUpdateRFQQuantity = (productId: string, newQty: number) => {
    setRfqItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveRFQItem = (productId: string) => {
    setRfqItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearRFQ = () => {
    setRfqItems([]);
  };

  const handleOpenCalculatorForProduct = (product: JuteExportProduct) => {
    setCalculatorInitialProduct(product);
    setIsCalculatorOpen(true);
  };

  const handleScrollToTop10 = () => {
    const el = document.getElementById('top-10-catalogue');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenStorySection = () => {
    const el = document.getElementById('golden-fiber-story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsStoryModalOpen(true);
    }
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return TOP_10_EXPORT_PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory === 'top-10-exports') {
        // all top 10
      } else if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(q);
        const matchBengali = product.bengaliName.toLowerCase().includes(q);
        const matchTag = product.tagline.toLowerCase().includes(q);
        const matchDesc = product.description.toLowerCase().includes(q);
        const matchHs = product.hsCode.toLowerCase().includes(q);
        const matchHub = product.exportHub.toLowerCase().includes(q);
        const matchWeave = product.technicalSpecs.weaveOrStructure.toLowerCase().includes(q);

        if (!matchName && !matchBengali && !matchTag && !matchDesc && !matchHs && !matchHub && !matchWeave) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rank') return a.rank - b.rank;
      if (sortBy === 'price-asc') return a.fobPriceUsdPerUnit - b.fobPriceUsdPerUnit;
      if (sortBy === 'price-desc') return b.fobPriceUsdPerUnit - a.fobPriceUsdPerUnit;
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.rank - b.rank;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const rfqProductIds = rfqItems.map((it) => it.product.id);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2117] selection:bg-[#D7B187] selection:text-[#1F1710]">
      {/* Navigation */}
      <Navbar
        currentCurrency={currentCurrency}
        onSelectCurrency={setCurrentCurrency}
        rfqCount={rfqItems.length}
        onOpenRFQ={() => setIsRFQOpen(true)}
        onOpenCalculator={() => {
          setCalculatorInitialProduct(TOP_10_EXPORT_PRODUCTS[0]);
          setIsCalculatorOpen(true);
        }}
        onOpenStory={() => setIsStoryModalOpen(true)}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="flex-1">
        {/* Authoritative Bangladesh Jute Export Base Hero */}
        <HeroBanner
          onScrollToTop10={handleScrollToTop10}
          onOpenStory={handleOpenStorySection}
          onOpenCalculator={() => {
            setCalculatorInitialProduct(TOP_10_EXPORT_PRODUCTS[0]);
            setIsCalculatorOpen(true);
          }}
        />

        {/* The Top 10 Bangladeshi Jute Goods Export Catalogue */}
        <CatalogueGrid
          products={filteredProducts}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          currency={currentCurrency}
          onSelectProduct={setSelectedProduct}
          onAddToRFQ={handleAddToRFQ}
          onOpenCalculatorForProduct={handleOpenCalculatorForProduct}
          rfqProductIds={rfqProductIds}
          searchQuery={searchQuery}
          onResetFilters={() => {
            setSelectedCategory('top-10-exports');
            setSearchQuery('');
            setSortBy('rank');
          }}
        />

        {/* Dedicated Bengal Golden Fiber Story: The Unique BD Article */}
        <BengalGoldenFiberStory
          onNavigateToProduct={(prodId) => {
            const prod = TOP_10_EXPORT_PRODUCTS.find((p) => p.id === prodId);
            if (prod) {
              setSelectedProduct(prod);
            }
          }}
        />

        {/* Port Logistics & Terminal Standards Banner */}
        <ExportLogisticsBanner />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Product Detail Technical Dossier Modal */}
      <ProductDetailModal
        product={selectedProduct}
        currency={currentCurrency}
        onClose={() => setSelectedProduct(null)}
        onAddToRFQ={handleAddToRFQ}
        onOpenCalculatorForProduct={handleOpenCalculatorForProduct}
        isInRFQ={selectedProduct ? rfqProductIds.includes(selectedProduct.id) : false}
      />

      {/* Container Load & Freight Estimator Modal */}
      <ContainerCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        products={TOP_10_EXPORT_PRODUCTS}
        selectedProductInitial={calculatorInitialProduct}
        currency={currentCurrency}
        onApplyToRFQ={(prod, qty) => {
          handleAddToRFQ(prod, qty);
          setIsRFQOpen(true);
        }}
      />

      {/* Dedicated Story Reader Modal (if opened via Navbar/Hero) */}
      {isStoryModalOpen && (
        <BengalGoldenFiberStory
          isOpenModal={true}
          onCloseModal={() => setIsStoryModalOpen(false)}
          onNavigateToProduct={(prodId) => {
            setIsStoryModalOpen(false);
            const prod = TOP_10_EXPORT_PRODUCTS.find((p) => p.id === prodId);
            if (prod) {
              setSelectedProduct(prod);
            }
          }}
        />
      )}

      {/* Request for Quotation & Sample Drawer */}
      <RFQDrawer
        isOpen={isRFQOpen}
        onClose={() => setIsRFQOpen(false)}
        rfqItems={rfqItems}
        currency={currentCurrency}
        onUpdateQuantity={handleUpdateRFQQuantity}
        onRemoveItem={handleRemoveRFQItem}
        onClearRFQ={handleClearRFQ}
      />
    </div>
  );
}

export default App;
