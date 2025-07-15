
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Globe, FileText, Languages } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState("");
  const [urduTranslation, setUrduTranslation] = useState("");

  const isValidUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      toast({
        title: "URL Required",
        description: "Please enter a blog URL to summarize",
        variant: "destructive",
      });
      return;
    }

    if (!isValidUrl(url)) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Mock API call simulation
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock summary and translation
      const mockSummary = `This blog post discusses the latest trends in web development, focusing on modern frameworks and best practices. The author explores how React, TypeScript, and modern CSS techniques are reshaping the development landscape. Key points include the importance of component-based architecture, type safety, and responsive design principles. The post also covers performance optimization strategies and the growing adoption of serverless technologies in modern web applications.`;
      
      const mockUrduTranslation = `یہ بلاگ پوسٹ ویب ڈیولپمنٹ کے جدید رجحانات پر بحث کرتی ہے، جس میں جدید فریم ورکس اور بہترین طریقوں پر توجہ دی گئی ہے۔ مصنف اس بات کا جائزہ لیتا ہے کہ کیسے React، TypeScript، اور جدید CSS تکنیکیں ڈیولپمنٹ کے منظرنامے کو تبدیل کر رہی ہیں۔ اہم نکات میں کمپوننٹ پر مبنی آرکیٹیکچر، ٹائپ سیفٹی، اور ریسپانسو ڈیزائن کے اصولوں کی اہمیت شامل ہے۔ یہ پوسٹ کارکردگی کی بہتری کی حکمت عملیوں اور جدید ویب ایپلیکیشنز میں سرورلیس ٹیکنالوجیز کی بڑھتی ہوئی اپنائیت کو بھی شامل کرتی ہے۔`;
      
      setSummary(mockSummary);
      setUrduTranslation(mockUrduTranslation);
      
      toast({
        title: "Success!",
        description: "Blog summary and translation generated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process the blog URL. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const clearResults = () => {
    setSummary("");
    setUrduTranslation("");
    setUrl("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Blog Summarizer & Translator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter any blog URL to get an AI-powered summary and Urdu translation instantly
          </p>
        </div>

        {/* URL Input Form */}
        <Card className="max-w-2xl mx-auto mb-8 shadow-lg border-0 bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Enter Blog URL
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="url"
                placeholder="https://example.com/blog-post"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="text-lg py-6"
                disabled={isLoading}
              />
              <div className="flex gap-3">
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Summarize & Translate"
                  )}
                </Button>
                {(summary || urduTranslation) && (
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={clearResults}
                    className="py-6"
                  >
                    Clear
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Results */}
        {(summary || urduTranslation) && (
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* AI Summary */}
            <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <FileText className="w-5 h-5" />
                  AI Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {summary}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Urdu Translation */}
            <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-600">
                  <Languages className="w-5 h-5" />
                  Urdu Translation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg text-right font-['Noto_Nastaliq_Urdu']">
                    {urduTranslation}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <Card key={i} className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-gray-300 rounded animate-pulse"></div>
                      <div className="w-32 h-6 bg-gray-300 rounded animate-pulse"></div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[1, 2, 3, 4].map((line) => (
                        <div 
                          key={line} 
                          className="h-4 bg-gray-300 rounded animate-pulse"
                          style={{ width: `${Math.random() * 40 + 60}%` }}
                        ></div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        {!summary && !urduTranslation && !isLoading && (
          <div className="max-w-4xl mx-auto mt-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Summary</h3>
                <p className="text-gray-600">
                  Get concise, intelligent summaries of any blog post using advanced AI
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Languages className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Urdu Translation</h3>
                <p className="text-gray-600">
                  Automatic translation to Urdu for better accessibility and understanding
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Any Blog URL</h3>
                <p className="text-gray-600">
                  Works with any blog or article URL from across the web
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
