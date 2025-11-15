import { useState } from "react";
import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const Categories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Fiction", bookCount: 342 },
    { id: 2, name: "Non-Fiction", bookCount: 198 },
    { id: 3, name: "Science Fiction", bookCount: 145 },
    { id: 4, name: "Romance", bookCount: 89 },
    { id: 5, name: "History", bookCount: 76 },
    { id: 6, name: "Biography", bookCount: 54 },
  ]);

  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, { id: Date.now(), name: newCategory, bookCount: 0 }]);
      setNewCategory("");
      toast.success("Category added successfully!");
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Categories</h2>
          <p className="text-muted-foreground">Manage book categories</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Add New Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="Enter category name"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleAddCategory()}
              />
              <Button onClick={handleAddCategory}>
                <Plus className="mr-2 h-4 w-4" />
                Add
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Card key={category.id}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                    <Badge variant="secondary">{category.bookCount} books</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Categories;
