"use client";

import * as React from "react";
import {
  Check,
  Plus,
  Send,
  Bot,
  Paperclip,
  Mic,
  CornerDownLeft,
  ArrowUpIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
  ChatInput,
  ChatMessageList,
  FlickeringGrid,
  HoverButton,
  Input,
  ScrollArea,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import Image from "next/image";
import { AIInputWithLoading } from "@/components/ui/ai-input-with-loading";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { ChatBox } from "@/components/ui/chatbox";

export default function Page() {
  const [messages, setMessages] = React.useState([
    {
      id: 1,
      content: "Hey ! my name is Sayan De Want to know more about me ?",
      sender: "ai",
    },
    // {
    //   id: 2,
    //   content: "I have a question about the component library.",
    //   sender: "user",
    // },
    // {
    //   id: 3,
    //   content: "Sure! I'd be happy to help. What would you like to know?",
    //   sender: "ai",
    // },
  ]);

  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        content: input,
        sender: "user",
      },
    ]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          content: "This is an AI response to your message.",
          sender: "ai",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 56,
    maxHeight: 200,
  });

  const [input, setInput] = React.useState("");

  return (
    <div className="relative bg-background h-screen w-screen flex items-center justify-center">
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
      <Card className="absolute w-full bg-background h-full max-w-[700px] max-h-[800px] flex flex-col">
        <CardHeader className="flex flex-row items-center p-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <span className="absolute flex size-2 right-0 bottom-0 z-10">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
              </span>
              <Avatar>
                <AvatarImage
                  src="/pic.jpeg"
                  className="object-cover"
                  alt="Image"
                />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <p className="text-sm font-medium leading-none">Sayan De</p>
              <p className="text-sm text-muted-foreground">
                sayandeten@gmail.com
              </p>
            </div>
          </div>
          {/* <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="outline"
                  className="ml-auto rounded-full"
                  // onClick={() => setOpen(true)}
                >
                  <Plus />
                  <span className="sr-only">New message</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={10}>New message</TooltipContent>
            </Tooltip>
          </TooltipProvider> */}
        </CardHeader>
        <CardContent className="min-h-[400px] h-full border bg-background rounded-lg flex flex-col mt-auto">
          <div className="flex-1 overflow-hidden">
            <ChatMessageList>
              <div className="flex flex-col justify-center items-center space-y-4">
                <Avatar className="h-28 w-28">
                  <AvatarImage
                    src="/pic.jpeg"
                    className="object-cover"
                    alt="Image"
                  />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                {/* <p className="text-sm font-medium">Hey ! my name is Sayan De</p>
                <p className="text-sm text-muted-foreground">
                  Want to know more about me ?
                </p> */}
                <a
                  className="text-xs text-white/80"
                  href="https://www.sayande.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Build by <span className="text-[#13EEE3]">sayande.com</span>
                </a>
              </div>
              {messages.map((message) => (
                <ChatBubble
                  key={message.id}
                  variant={message.sender === "user" ? "sent" : "received"}
                >
                  <ChatBubbleAvatar
                    className={cn(
                      "h-8 w-8 shrink-0r",
                      message.sender === "user" && "hidden"
                    )}
                    src={message.sender === "user" ? "" : "/pic.jpeg"}
                    fallback={message.sender === "user" ? "US" : "AI"}
                  />
                  <>
                    <ChatBox
                      variant={message.sender === "user" ? "sent" : "received"}
                    >
                      {message.content}
                    </ChatBox>
                    {/* <ChatBubbleMessage
                      variant={message.sender === "user" ? "sent" : "received"}
                    >
                      {message.content}
                    </ChatBubbleMessage> */}
                  </>
                </ChatBubble>
              ))}
              {isLoading && (
                <ChatBubble variant="received">
                  <ChatBubbleAvatar
                    className="h-8 w-8 shrink-0"
                    src="/pic.jpeg"
                    fallback="AI"
                  />
                  <ChatBox isLoading />
                </ChatBubble>
              )}
            </ChatMessageList>
          </div>
          <div className={cn("w-full py-4")}>
            <div className="relative max-w-xl w-full mx-auto flex items-start flex-col gap-2">
              <form
                onSubmit={handleSubmit}
                className="relative max-w-xl w-full mx-auto"
              >
                <Textarea
                  id="ai-input-with-loading"
                  placeholder="Type a message..."
                  className={cn(
                    "max-w-xl bg-muted w-full rounded-3xl pl-6 pr-10 py-4 border-border",
                    "placeholder:text-white/70",
                    "border-none ring-white/30",
                    "text-white resize-none text-wrap leading-[1.2]",
                    `min-h-[56px]`
                  )}
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    adjustHeight();
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                  disabled={isLoading}
                />
                <button
                  onClick={handleSubmit}
                  className={cn(
                    "absolute right-3 top-1/2 -translate-y-1/2 rounded-xl py-1 px-1",
                    isLoading ? "bg-none" : "bg-black/5"
                  )}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <button className="ai-button h-10 w-10">
                      <div
                        className="w-4 h-4 bg-white rounded-sm animate-spin transition duration-700 mx-auto"
                        style={{ animationDuration: "3s" }}
                      />
                      <span className="-z-10"></span>
                      <span className="-z-10"></span>
                    </button>
                  ) : (
                    <HoverButton className="rounded-full border border-zinc-600 h-10 w-10">
                      <ArrowUpIcon className="mx-auto" />
                    </HoverButton>

                    // <button className="ai2-button h-10 w-10">
                    //   <div className="w-4 h-4 bg-gray-500 rounded-sm mx-auto" />
                    //   <span className="-z-10"></span>
                    //   <span className="-z-10"></span>
                    //   {/* <ArrowUpIcon className="text-black mx-auto animate-bounce" /> */}
                    // </button>
                  )}
                </button>
              </form>
              <p className="pl-4 h-4 text-xs mx-auto text-white/70">
                {isLoading ? "AI is thinking..." : "Ready to submit!"}
              </p>
            </div>
          </div>
          {/* <PlaceholdersAndVanishInput onSubmit={handleSubmit} /> */}
        </CardContent>
        <CardFooter className="flex items-center justify-center p-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with
            <span className="inline-flex items-center">
              <div className="text-red-500 animate-heartbeat text-sm">❤️</div>
            </span>
            using Next.js, TypeScript, TailwindCSS, Python, Langchain, OpenAI,
            Pinecone, GCP
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
