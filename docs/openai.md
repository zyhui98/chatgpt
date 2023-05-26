# OpenAI入门手册

OpenAI是一个致力于开发安全和有益的人工智能的公司，它提供了一些强大的语言模型，如GPT-3、Codex和Embeddings，可以用于各种应用场景，如内容生成、摘要、语义搜索和自然语言到代码的转换。本手册将介绍如何使用OpenAI的服务，包括账号问题和常见错误。

## 账号问题

要使用OpenAI的服务，你需要先申请一个账号。目前，OpenAI的服务还处于邀请制阶段，你可以在[这里](https://share.openai.com/) 填写你的邮箱和用途，等待审核通过后，你会收到一封邮件，里面有你的API密钥和其他信息。

你可以在[这里](https://beta.openai.com/) 登录你的账号，查看你的API密钥、使用情况、账单等信息。你也可以在[这里](https://playground.openai.com/) 使用OpenAI的Playground，一个交互式的网页工具，可以让你快速地尝试不同的语言模型和参数。

[手动注册账号](https://mp.weixin.qq.com/s/CeR3pV9YzPnE7PK8vaUDGw)

## 常见错误

在使用OpenAI的服务时，你可能会遇到一些错误或问题。以下是一些常见的错误和解决办法：

- `Access denied` 
>OpenAI封锁你的IP。就是你当前的魔法节点使用人数过多，烂大街的节点流量异常就会拦截。解决办法：换ip、清除cookie缓存。
- `The email you provided is not supported.`
>QQ、163邮箱不可用；解决办法：更换邮箱，换成谷歌、QQ、outlook。
- `OpenAI's services are not available in your country`
>原因：这个是IP不在支持国家范围。解决方法：更换IP就可以了，香港、台湾不可用。推荐美国、印度、菲律宾、阿根廷等。
- `We ran into an issue while authenticating you`
>原因：身份验证问题，Oops，一般都是你的IP不干净。跟不支持你国家的提示一样，很多机场的节点就是这样子，多人用了，就会提示这个。
- `ChatGPT is at capacity right now`
>原因：ChatGPT高峰使用时段，普通用户会限流，如果你是ChatGPT Plus用户，就不会有这个问题。 解决方法：等待直到ChatGPT服务器压力变小或开通ChatGPT Plus。
- `This phone number is already linked to the maximum number of accounts`
>解决方法：1、使用漂亮国的手机号2、最好不要使用免费手机号，因为羊毛被薅差不多了！选择付费平台一般不会有这个问题sms-activate.org
- `You’ve made too many phone verification requests`
>原因：短时间内尝试验证电话号码的次数过多，解决方法：等 24 小时就会重置了。
                                               


## 常用连接
分享几个你肯定用得到的openai的几个服务网址：

chatGPT官网：[https://chat.openai.com/](https://chat.openai.com/)

openai api申请地址：[https://platform.openai.com/](https://platform.openai.com/)

GPT plugins申请地址：[https://openai.com/waitlist/plugins](https://openai.com/waitlist/plugins)

GPT4申请地址：[https://openai.com/waitlist/gpt-4-api](https://openai.com/waitlist/gpt-4-api)

GPT2500刀余额申请地址：[https://openai.com/microsoft-for-startups](https://openai.com/microsoft-for-startups)

GPT接口文档：[https://platform.openai.com/docs/api-reference/introduction](https://platform.openai.com/docs/api-reference/introduction)

所有地址我同步更新在导航网站：[https://www.aifuturecome.com/](https://www.aifuturecome.com/)

## 没有训练的数据如何提问？

GPT擅长回答问题，但是只能回答它以前被训练过的问题，如果是没有训练过的数据，比如一些私有数据或者最新的数据该怎么办呢？

这种情况下通常有两种办法，一种是微调（fine-tuning），一种是嵌入（embedding）。

微调就是在大模型的数据基础上做二次训练，事先准备好一批prompt-complition（类似于问答Q&A）的数据，生成新的模型，这个模型将会包含微调后的数据。

而嵌入则是每次向ChatGPT发送消息（prompt）的时候，把你自己数据结果带上。

**嵌入（embedding）实践**

> 问答通常的实现，embedding -> search -> llm，连续语义在第一步就丢失了。
>
> 我的方案是在前面，先让 ChatGPT 解释问题，返回关键词，流程变为：explain -> embedding -> search -> llm。

## ChatGPT的常用参数

- **model**：表示使用的模型类型，例如：gpt-3.5-turbo。
- **prompt**：表示你输入的提示词。
- **temperature**：表示生成的回答的多样性程度，取值范围为0到2，通常设置在0.7到1.0之间。将温度设置为较低的值将导致输出更可预测和重复(如果希望有固定的结果可以将值设为0)，而较高的温度会导致更随机和不可预测的输出。
- **top_p**：表示从概率分布中选择可能结果的阈值大小，取值范围0到1，通常设置在0.1到1.0之间。建议不要同时使用temperature和top_p。利用了核采样技术，设置为0.1意味着输出对前10%概率的token采样。
- **presence_penalty**：作用是惩罚文本中已经出现的单词，提升讨论新主题的可能性。取值范围-2.0到2.> 0。值越大，惩罚越大，通常设置在0.3到0.9之间。
- **frequency_penalty**：作用类似于presence_penalty，减少总体上（包括未在已有文本中出现的）使用频率较高的单词/短语的概率，增加使用频率较低的单词/短语的可能性。取值范围-2.0到2.0，设置为-2时可能会出现这样的效果：今天气温气温气温气温气温气温气温为15~27摄氏度。
- **max_tokens**：用于限制要生成的最多单词/标记数。它通常用于生成摘要或短文本场景，在这些场景中，输出需要有特定的长度限制。如果模型生成的句子超过了指定的最大标记数，则模型将停止生成句子，返回已生成的文本。
- **n**：生成的回复数量，通常设置为1。
- **stop**：用于控制停止的单词或短语列表（最多4个），当模型生成包含这些单词/短语的文本时，它将停止生成并返回结果。
- **stream**：是否以流的形式返回结果。若设置为true，那么回答会一个字一个字的蹦出来，类似打字的过程，否则就是一次性显示回答。
- **logit_bias**：修改指定标记出现在回答中的可能性。接受一个token（由GPT分词器中的token ID指定）映射到从-100到100的偏差值的json对象。可以使用官方提供的分词器工具（适用于GPT-2和GPT-3）将文本转换为tokenID。从数学上讲，在采样之前，偏差被添加到模型生成的logits中，人为改变一些token的概率。具体效果将因模型而异，但值在-1和1之间会减少或增加选择的可能性；值如-100或100会导致相关标记被禁止或独占生成。
- **best_of**：在多次生成中选择最佳结果。当使用best_of参数时，用户可以指定需要生成的次数，模型将返回这些次数中得分最高的结果作为最终输出。可以通过这种方法获取更准确的回答。

[详见官方API文档](https://platform.openai.com/docs/api-reference/introduction)

[详见官方API文档-中文版](https://openai.xiniushu.com/)


## 结束语

希望本手册能够帮助你快速地开始使用OpenAI的服务，并且解决一些常见的问题。如果你还有其他疑问或者建议，请访问[这里](https://support.openai.com/)获取更多信息和帮助。

