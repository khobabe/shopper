"use client"
import { List, ListItem, Card } from "@material-tailwind/react";
 
export function CategoriesList() {
  return (
    <Card className="flex-1">
      <List>
        <ListItem>Inbox</ListItem>
        <ListItem>Trash</ListItem>
        <ListItem>Settings</ListItem>
      </List>
    </Card>
  );
}