import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Finance = () => {
  const [vehiclePrice, setVehiclePrice] = useState<string>("500000");
  const [deposit, setDeposit] = useState<string>("50000");
  const [interestRate, setInterestRate] = useState<string>("11.5");
  const [loanTerm, setLoanTerm] = useState<string>("72");
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);

  useEffect(() => {
    calculateLoan();
  }, [vehiclePrice, deposit, interestRate, loanTerm]);

  const calculateLoan = () => {
    const principal = parseFloat(vehiclePrice) - parseFloat(deposit);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(loanTerm);

    if (principal <= 0 || monthlyRate <= 0 || numberOfPayments <= 0) {
      setMonthlyPayment(0);
      setTotalPayment(0);
      setTotalInterest(0);
      return;
    }

    // Monthly payment formula: P * (r(1+r)^n) / ((1+r)^n - 1)
    const monthly =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const total = monthly * numberOfPayments;
    const interest = total - principal;

    setMonthlyPayment(isNaN(monthly) ? 0 : Math.round(monthly));
    setTotalPayment(isNaN(total) ? 0 : Math.round(total));
    setTotalInterest(isNaN(interest) ? 0 : Math.round(interest));
  };

  const formatCurrency = (value: number) => {
    return `R ${value.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24 lg:pt-28">
        {/* Hero Section */}
        <section className="bg-card border-b border-border py-12 md:py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="font-display text-3xl md:text-5xl uppercase tracking-wider mb-4">
                <span className="text-chrome">Vehicle</span>{" "}
                <span className="text-primary">Finance</span>
              </h1>
              <p className="text-muted-foreground font-body text-base md:text-lg max-w-2xl mx-auto">
                Calculate your monthly payments and explore flexible financing options for your dream classic car
              </p>
            </motion.div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Calculator Inputs */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card rounded-lg p-6 md:p-8 border border-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-xl md:text-2xl uppercase tracking-wider text-foreground">
                    Loan Calculator
                  </h2>
                </div>

                <div className="space-y-5">
                  {/* Vehicle Price */}
                  <div className="flex flex-col gap-2">
                    <label className="font-display text-xs uppercase tracking-widest text-muted-foreground">
                      Vehicle Price (R)
                    </label>
                    <input
                      type="number"
                      value={vehiclePrice}
                      onChange={(e) => setVehiclePrice(e.target.value)}
                      className="bg-input border border-border rounded-md px-4 py-3 text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="500000"
                    />
                  </div>

                  {/* Deposit */}
                  <div className="flex flex-col gap-2">
                    <label className="font-display text-xs uppercase tracking-widest text-muted-foreground">
                      Deposit (R)
                    </label>
                    <input
                      type="number"
                      value={deposit}
                      onChange={(e) => setDeposit(e.target.value)}
                      className="bg-input border border-border rounded-md px-4 py-3 text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="50000"
                    />
                  </div>

                  {/* Interest Rate */}
                  <div className="flex flex-col gap-2">
                    <label className="font-display text-xs uppercase tracking-widest text-muted-foreground">
                      Interest Rate (%)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="bg-input border border-border rounded-md px-4 py-3 text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="11.5"
                    />
                  </div>

                  {/* Loan Term */}
                  <div className="flex flex-col gap-2">
                    <label className="font-display text-xs uppercase tracking-widest text-muted-foreground">
                      Loan Term (Months)
                    </label>
                    <select
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(e.target.value)}
                      className="bg-input border border-border rounded-md px-4 py-3 text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    >
                      <option value="12">12 Months</option>
                      <option value="24">24 Months</option>
                      <option value="36">36 Months</option>
                      <option value="48">48 Months</option>
                      <option value="60">60 Months</option>
                      <option value="72">72 Months</option>
                      <option value="84">84 Months</option>
                    </select>
                  </div>
                </div>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col gap-6"
              >
                {/* Monthly Payment Card */}
                <div className="bg-primary rounded-lg p-6 md:p-8 text-center">
                  <p className="font-display text-xs uppercase tracking-widest text-primary-foreground/80 mb-2">
                    Estimated Monthly Payment
                  </p>
                  <p className="font-display text-4xl md:text-5xl text-primary-foreground">
                    {formatCurrency(monthlyPayment)}
                  </p>
                  <p className="font-body text-primary-foreground/60 text-sm mt-2">
                    per month
                  </p>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-card rounded-lg p-5 border border-border text-center">
                    <p className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-2">
                      Total Payment
                    </p>
                    <p className="font-display text-2xl text-foreground">
                      {formatCurrency(totalPayment)}
                    </p>
                  </div>
                  <div className="bg-card rounded-lg p-5 border border-border text-center">
                    <p className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-2">
                      Total Interest
                    </p>
                    <p className="font-display text-2xl text-chrome">
                      {formatCurrency(totalInterest)}
                    </p>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-muted-foreground font-body text-xs md:text-sm">
                    * This calculator provides an estimate only. Actual rates and payments may vary based on your credit profile and the lender's terms. Contact us for accurate quotes.
                  </p>
                </div>

                {/* Contact CTA */}
                <a
                  href="tel:+27613832618"
                  className="flex items-center justify-center gap-3 bg-card hover:bg-muted border border-border rounded-lg p-5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-display text-sm uppercase tracking-wider text-foreground">
                      Need Help?
                    </p>
                    <p className="font-body text-muted-foreground text-sm">
                      Call us: 061 383 2618
                    </p>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Finance Info Section */}
        <section className="py-12 md:py-16 bg-card border-t border-border">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="font-display text-2xl md:text-3xl uppercase tracking-wider mb-6">
                <span className="text-chrome">Flexible</span>{" "}
                <span className="text-primary">Options</span>
              </h2>
              <p className="text-muted-foreground font-body text-base md:text-lg mb-8">
                At Gordons AutoTraders, we work with multiple finance partners to find you the best rates. Whether you're looking for a classic investment piece or your dream car, we'll help structure a deal that works for you.
              </p>
              <a
                href="#contact"
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-display uppercase tracking-widest py-4 px-8 rounded-md btn-glow transition-all"
              >
                Get a Quote
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Finance;
