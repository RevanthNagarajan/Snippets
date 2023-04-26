from queue import Empty, Full, Queue
import time
from common.util import CommonUtility

class Cache_Node :
	def __init__(self, value, validTrough) :
		self.content = value
		self.valid_through = validTrough or time.time()+60000

	def get_value(self) :
		return {
			"content" : self.content,
			"valid_through" : self.valid_through
		}


class LRU_Cache_Queue :
	def __init__(self,valid_through=None,max_size=None) :
		self.valid_through=valid_through
		
		self._cache_content = Queue(maxsize = int(CommonUtility.get_config()["cache_max_size"]) if max_size is None else max_size)

	def decease_outdated(self,valid_through) :
		new_queue = Queue(maxsize=int(CommonUtility.get_config()["cache_max_size"]))
		try:
			while (self.cache_content.qsize()>0) :
				popped = self.cache_content.get_nowait()
				if(time.time() - popped.get_value()['valid_through']) :
					try:
						new_queue.put_nowait(Cache_Node(popped.get_value()['content'], popped.get_value()['valid_through']))
					except(Full) :
						pass
		except(Empty) :
			pass
		self._cache_content = new_queue

	@classmethod
	def evict(cls, value) :
		if(value._cache_content.full()) :
			try:
				value._cache_content.get_nowait()
			except(Empty) :
				pass
	
	@property
	def cache_content(self):
		return self._cache_content
        
	@cache_content.setter
	def cache_content(self, value):
		LRU_Cache_Queue.evict(self)
		try:
			self._cache_content.put_nowait(Cache_Node(value, self.valid_through))
		except(Full) :
			pass

	def get_cache_iterable (self) :
		#LRU_Cache_Queue.decease_outdated(self,self.valid_through)
		return self._cache_content.queue
