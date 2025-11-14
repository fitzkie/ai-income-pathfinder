import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Opportunity } from "@shared/schema";
import { Plus, Trash2, Edit2, BarChart3, Settings } from "lucide-react";

interface OpportunityFormData {
  title: string;
  slug: string;
  summary: string;
  category: "Services" | "Digital Products" | "Content" | "Commerce" | "SaaS";
  skillsNeeded: string[];
  assetsHelpful: string[];
  difficulty: number;
  timeToCash: number;
  startupCost: number;
  typicalARPU?: number;
  demandTags: string[];
  exampleTasks: string[];
  examplePrompts: string[];
}

export default function Admin() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<Partial<OpportunityFormData>>({
    category: "Content",
    difficulty: 2,
    timeToCash: 2,
    startupCost: 2,
    skillsNeeded: [],
    assetsHelpful: [],
    demandTags: [],
    exampleTasks: [],
    examplePrompts: [],
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [skillInput, setSkillInput] = useState("");
  const [assetInput, setAssetInput] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [taskInput, setTaskInput] = useState("");
  const [promptInput, setPromptInput] = useState("");

  useEffect(() => {
    fetchOpportunities();
  }, []);

  const fetchOpportunities = async () => {
    try {
      const res = await fetch("/api/opportunities");
      const data = await res.json();
      setOpportunities(data);
    } catch (error) {
      console.error("Failed to fetch opportunities:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddSkill = () => {
    if (skillInput.trim()) {
      setFormData({
        ...formData,
        skillsNeeded: [...(formData.skillsNeeded || []), skillInput],
      });
      setSkillInput("");
    }
  };

  const handleAddAsset = () => {
    if (assetInput.trim()) {
      setFormData({
        ...formData,
        assetsHelpful: [...(formData.assetsHelpful || []), assetInput],
      });
      setAssetInput("");
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim()) {
      setFormData({
        ...formData,
        demandTags: [...(formData.demandTags || []), tagInput],
      });
      setTagInput("");
    }
  };

  const handleAddTask = () => {
    if (taskInput.trim()) {
      setFormData({
        ...formData,
        exampleTasks: [...(formData.exampleTasks || []), taskInput],
      });
      setTaskInput("");
    }
  };

  const handleAddPrompt = () => {
    if (promptInput.trim()) {
      setFormData({
        ...formData,
        examplePrompts: [...(formData.examplePrompts || []), promptInput],
      });
      setPromptInput("");
    }
  };

  const handleRemoveItem = (
    array: string[] | undefined,
    index: number,
    key: keyof OpportunityFormData
  ) => {
    if (array) {
      const updated = array.filter((_, i) => i !== index);
      setFormData({ ...formData, [key]: updated });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const method = editingId ? "PUT" : "POST";
      const url = editingId ? `/api/opportunities/${editingId}` : "/api/opportunities";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        await fetchOpportunities();
        resetForm();
      }
    } catch (error) {
      console.error("Failed to save opportunity:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/opportunities/${id}`, { method: "DELETE" });
      if (res.ok) {
        await fetchOpportunities();
        setDeleteConfirm(null);
      }
    } catch (error) {
      console.error("Failed to delete opportunity:", error);
    }
  };

  const handleEdit = (opportunity: Opportunity) => {
    setFormData(opportunity);
    setEditingId(opportunity.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setFormData({
      category: "Content",
      difficulty: 2,
      timeToCash: 2,
      startupCost: 2,
      skillsNeeded: [],
      assetsHelpful: [],
      demandTags: [],
      exampleTasks: [],
      examplePrompts: [],
    });
    setEditingId(null);
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Digital Products": "bg-blue-100 text-blue-800",
      "Content": "bg-purple-100 text-purple-800",
      "Services": "bg-green-100 text-green-800",
      "Commerce": "bg-orange-100 text-orange-800",
      "SaaS": "bg-pink-100 text-pink-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage {opportunities.length} AI side hustles</p>
        </div>

        <Tabs defaultValue="opportunities" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="opportunities">
              <BarChart3 className="w-4 h-4 mr-2" />
              All Opportunities
            </TabsTrigger>
            <TabsTrigger value="form">
              <Plus className="w-4 h-4 mr-2" />
              {editingId ? "Edit" : "Add New"}
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <Settings className="w-4 h-4 mr-2" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="form" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{editingId ? "Edit Opportunity" : "Add New Opportunity"}</CardTitle>
                <CardDescription>Create or modify an AI side hustle opportunity</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title *</Label>
                      <Input
                        id="title"
                        value={formData.title || ""}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="e.g., AI Blog Writer"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="slug">Slug *</Label>
                      <Input
                        id="slug"
                        value={formData.slug || ""}
                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                        placeholder="e.g., ai-blog-writer"
                        required
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="summary">Summary *</Label>
                      <textarea
                        id="summary"
                        value={formData.summary || ""}
                        onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                        placeholder="Brief description of the opportunity"
                        className="w-full px-3 py-2 border rounded-md text-sm"
                        rows={2}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value: any) =>
                          setFormData({ ...formData, category: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Services">Services</SelectItem>
                          <SelectItem value="Digital Products">Digital Products</SelectItem>
                          <SelectItem value="Content">Content</SelectItem>
                          <SelectItem value="Commerce">Commerce</SelectItem>
                          <SelectItem value="SaaS">SaaS</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="typicalARPU">Typical ARPU (1-5)</Label>
                      <Input
                        id="typicalARPU"
                        type="number"
                        min="1"
                        max="5"
                        value={formData.typicalARPU || ""}
                        onChange={(e) =>
                          setFormData({ ...formData, typicalARPU: parseInt(e.target.value) })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="difficulty">Difficulty (1-5) *</Label>
                      <Input
                        id="difficulty"
                        type="number"
                        min="1"
                        max="5"
                        value={formData.difficulty || ""}
                        onChange={(e) =>
                          setFormData({ ...formData, difficulty: parseInt(e.target.value) })
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeToCash">Time to Cash (1-5) *</Label>
                      <Input
                        id="timeToCash"
                        type="number"
                        min="1"
                        max="5"
                        value={formData.timeToCash || ""}
                        onChange={(e) =>
                          setFormData({ ...formData, timeToCash: parseInt(e.target.value) })
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="startupCost">Startup Cost (1-5) *</Label>
                      <Input
                        id="startupCost"
                        type="number"
                        min="1"
                        max="5"
                        value={formData.startupCost || ""}
                        onChange={(e) =>
                          setFormData({ ...formData, startupCost: parseInt(e.target.value) })
                        }
                        required
                      />
                    </div>
                  </div>

                  {/* Skills Needed */}
                  <div className="space-y-2">
                    <Label htmlFor="skill">Skills Needed</Label>
                    <div className="flex gap-2">
                      <Input
                        id="skill"
                        value={skillInput}
                        onChange={(e) => setSkillInput(e.target.value)}
                        placeholder="e.g., writing, seo"
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddSkill())}
                      />
                      <Button type="button" onClick={handleAddSkill} variant="outline">
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.skillsNeeded?.map((skill, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="cursor-pointer"
                          onClick={() => handleRemoveItem(formData.skillsNeeded, idx, "skillsNeeded")}
                        >
                          {skill} ✕
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Assets */}
                  <div className="space-y-2">
                    <Label htmlFor="asset">Assets Helpful</Label>
                    <div className="flex gap-2">
                      <Input
                        id="asset"
                        value={assetInput}
                        onChange={(e) => setAssetInput(e.target.value)}
                        placeholder="e.g., chatgpt, canva"
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddAsset())}
                      />
                      <Button type="button" onClick={handleAddAsset} variant="outline">
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.assetsHelpful?.map((asset, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="cursor-pointer"
                          onClick={() => handleRemoveItem(formData.assetsHelpful, idx, "assetsHelpful")}
                        >
                          {asset} ✕
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Demand Tags */}
                  <div className="space-y-2">
                    <Label htmlFor="tag">Demand Tags</Label>
                    <div className="flex gap-2">
                      <Input
                        id="tag"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        placeholder="e.g., trending, high-demand"
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTag())}
                      />
                      <Button type="button" onClick={handleAddTag} variant="outline">
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.demandTags?.map((tag, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="cursor-pointer"
                          onClick={() => handleRemoveItem(formData.demandTags, idx, "demandTags")}
                        >
                          {tag} ✕
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Example Tasks */}
                  <div className="space-y-2">
                    <Label htmlFor="task">Example Tasks</Label>
                    <div className="flex gap-2">
                      <Input
                        id="task"
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                        placeholder="e.g., Create first AI prompt"
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTask())}
                      />
                      <Button type="button" onClick={handleAddTask} variant="outline">
                        Add
                      </Button>
                    </div>
                    <div className="space-y-2 mt-2">
                      {formData.exampleTasks?.map((task, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
                        >
                          <span className="text-sm">{task}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(formData.exampleTasks, idx, "exampleTasks")}
                            className="text-destructive hover:text-destructive/80"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Example Prompts */}
                  <div className="space-y-2">
                    <Label htmlFor="prompt">Example Prompts</Label>
                    <div className="flex gap-2">
                      <Input
                        id="prompt"
                        value={promptInput}
                        onChange={(e) => setPromptInput(e.target.value)}
                        placeholder="e.g., Write a blog post about..."
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddPrompt())}
                      />
                      <Button type="button" onClick={handleAddPrompt} variant="outline">
                        Add
                      </Button>
                    </div>
                    <div className="space-y-2 mt-2">
                      {formData.examplePrompts?.map((prompt, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
                        >
                          <span className="text-sm">{prompt}</span>
                          <button
                            type="button"
                            onClick={() =>
                              handleRemoveItem(formData.examplePrompts, idx, "examplePrompts")
                            }
                            className="text-destructive hover:text-destructive/80"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button type="submit" className="flex-1">
                      {editingId ? "Update Opportunity" : "Create Opportunity"}
                    </Button>
                    {editingId && (
                      <Button type="button" variant="outline" onClick={resetForm} className="flex-1">
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="opportunities" className="space-y-6 mt-6">
            <div className="grid gap-4">
              {opportunities.map((opp) => (
                <Card key={opp.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold">{opp.title}</h3>
                          <Badge className={getCategoryColor(opp.category)}>
                            {opp.category}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">{opp.summary}</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                          <div>
                            <span className="font-semibold">Difficulty:</span>
                            <span className="ml-2">{opp.difficulty}/5</span>
                          </div>
                          <div>
                            <span className="font-semibold">Time to Cash:</span>
                            <span className="ml-2">{opp.timeToCash}/5</span>
                          </div>
                          <div>
                            <span className="font-semibold">Startup Cost:</span>
                            <span className="ml-2">{opp.startupCost}/5</span>
                          </div>
                          {opp.typicalARPU && (
                            <div>
                              <span className="font-semibold">ARPU:</span>
                              <span className="ml-2">{opp.typicalARPU}/5</span>
                            </div>
                          )}
                        </div>

                        <div className="space-y-3 text-sm">
                          <div>
                            <span className="font-semibold">Skills: </span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {opp.skillsNeeded.map((skill, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <span className="font-semibold">Demand Tags: </span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {opp.demandTags.map((tag, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs bg-blue-50">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 ml-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(opp)}
                          className="gap-2"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => setDeleteConfirm(opp.id)}
                          className="gap-2"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{opportunities.length}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Average Difficulty</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">
                    {(
                      opportunities.reduce((sum, opp) => sum + opp.difficulty, 0) /
                      opportunities.length
                    ).toFixed(1)}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Avg Time to Cash</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">
                    {(
                      opportunities.reduce((sum, opp) => sum + opp.timeToCash, 0) /
                      opportunities.length
                    ).toFixed(1)}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Opportunities by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Array.from(new Set(opportunities.map((o) => o.category))).map((category) => {
                    const count = opportunities.filter((o) => o.category === category).length;
                    return (
                      <div key={category} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge className={getCategoryColor(category)}>{category}</Badge>
                          <span className="text-muted-foreground">{count} opportunities</span>
                        </div>
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{
                              width: `${(count / opportunities.length) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Difficulty Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((level) => {
                    const count = opportunities.filter((o) => o.difficulty === level).length;
                    return (
                      <div key={level} className="flex items-center justify-between">
                        <span className="text-sm">Level {level}</span>
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-orange-500 h-2 rounded-full"
                            style={{
                              width: `${(count / opportunities.length) * 100}%`,
                            }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <AlertDialog open={!!deleteConfirm} onOpenChange={(open) => !open && setDeleteConfirm(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Opportunity</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this opportunity? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex gap-3">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteConfirm && handleDelete(deleteConfirm)}
              className="bg-destructive"
            >
              Delete
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
