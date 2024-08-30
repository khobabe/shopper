"use client"
import { List, ListItem, Card } from "@material-tailwind/react";
 
export function CategoriesList() {
  return (
    <Card className="flexf-1">
      <List>
        <a href="#" className="text-initial">
          <ListItem>Inbox</ListItem>
        </a>
        <a href="#" className="text-initial">
          <ListItem>Trash</ListItem>
        </a>
        <a href="#" className="text-initial">
          <ListItem>Settings</ListItem>
        </a>
      </List>
    </Card>
  );
}