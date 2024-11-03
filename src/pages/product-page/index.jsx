import React from "react";
import { Menu, X, ChevronRight, Filter } from "lucide-react";
import products from "../../data/products";

// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { ScrollArea } from "@/components/ui/scroll-area"

const ProductPage = () => {
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredProducts = React.useMemo(() => {
    return products.filter(
      (product) =>
        (selectedCategory === "all" || product.category === selectedCategory) &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [selectedCategory, searchTerm, filterOpen]);

  return (
    <main className="flex-grow pt-16">
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden min-h-[60dvh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Our Products
            </h1>
            <p className="mt-6 text-xl max-w-2xl mx-auto">
              Discover our wide range of packaging solutions designed to
              protect, present, and deliver your products with excellence.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto"
          >
            <path
              fill="#EBF8FF"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            <aside className="md:w-1/4">
              <div className="sticky top-24">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Filters</h2>
                    <button
                      variant="ghost"
                      size="sm"
                      onClick={() => setFilterOpen(!filterOpen)}
                      className="md:hidden"
                    >
                      <Filter className="h-5 w-5" />
                    </button>
                  </div>
                  <div
                    className={`${filterOpen ? "block" : "hidden"} md:block`}
                  >
                    <div className="mb-4 flex flex-col">
                      <label
                        htmlFor="search"
                        className="text-sm font-medium text-gray-700"
                      >
                        Search
                      </label>
                      <input
                        type="text"
                        id="search"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="mt-1 border p-3 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Category
                      </label>
                      <div
                        value={selectedCategory}
                        onValueChange={setSelectedCategory}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="all"
                            name="prd"
                            id="all"
                            checked={selectedCategory === "all"}
                          />
                          <label htmlFor="all">All Products</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="boxes"
                            id="boxes"
                            name="prd"
                          />
                          <label htmlFor="boxes">Boxes</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="rolls"
                            id="rolls"
                            name="prd"
                          />
                          <label htmlFor="rolls">Rolls</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="sheets"
                            id="sheets"
                            name="prd"
                          />
                          <label htmlFor="sheets">Sheets & Pads</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="tapes"
                            id="tapes"
                            name="prd"
                          />
                          <label htmlFor="tapes">Tapes</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="films"
                            id="films"
                            name="prd"
                          />
                          <label htmlFor="films">Films</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="custom"
                            id="custom"
                            name="prd"
                          />
                          <label htmlFor="custom">Custom Solutions</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <div className="md:w-3/4">
              <div className="h-[calc(100vh-14rem)] overflow-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg text-blue-500 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="p-0">
                        <img
                          // src={product.image}
                          src={"https://placehold.co/400x300/png"}
                          alt={product.name}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4 my-4">
                          <h3 className="text-lg font-semibold mb-2">
                            {product.name}
                          </h3>
                          <button
                            variant="secondary"
                            className="w-full flex p-2 rounded-lg justify-center items-center text-black bg-gray-100"
                          >
                            Learn More <ChevronRight className="ml-2 h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
