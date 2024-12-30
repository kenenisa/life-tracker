import React, { useState } from "react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head, router } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Categories array
const categories = [
  { id: 1, name: "Rent" },
  { id: 2, name: "Food" },
  { id: 3, name: "Transportation" },
  { id: 4, name: "Utilities" },
  { id: 5, name: "Entertainment" },
];

export default function Welcome() {
  const [formState, setFormState] = useState({
    income: 0,
    expense: 0,
    category_id: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleCategoryChange = (value: string) => {
    setFormState((prev) => ({
      ...prev,
      category_id: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.post("/finances", formState, {
      onSuccess: () => {
        console.log("Transaction added successfully");
      },
    });
  };

  return (
    <DefaultLayout>
      <Head title='Add Transaction' />
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <Card className='w-[350px]'>
          <CardHeader>
            <CardTitle>Add Income/Expense</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='income'>Income</Label>
                  <Input
                    id='income'
                    placeholder='Income amount'
                    type='number'
                    value={formState.income}
                    onChange={handleChange}
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='expense'>Expense</Label>
                  <Input
                    id='expense'
                    placeholder='Expense amount'
                    type='number'
                    value={formState.expense}
                    onChange={handleChange}
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='category_id'>Category</Label>
                  <Select onValueChange={handleCategoryChange}>
                    <SelectTrigger id='category_id'>
                      <SelectValue placeholder='Select a category' />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                      {categories.map((category) => (
                        <SelectItem
                          key={category.id}
                          value={String(category.id)}
                        >
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <CardFooter className='flex justify-between mt-4'>
                <Button
                  type='button'
                  variant='outline'
                  onClick={() =>
                    setFormState({ income: 0, expense: 0, category_id: "" })
                  }
                >
                  Cancel
                </Button>
                <Button type='submit'>Add Transaction</Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </DefaultLayout>
  );
}
